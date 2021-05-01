import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SFExperience } from '../models/sf-experience';
import { SFExperiencesService } from '../services/sf-experiences.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sf-carousel',
  templateUrl: 'sf-carousel.component.html',
  animations: [
    trigger('goFrontCont', [
      state('front', style({
        transform: 'rotateY(12.566370614359172rad)',
        width: '60vw',
        left: '20vw',
        height: '70vh',
        top: '-10%',
      })),
      state('back', style({
        height: '300px',
        width: '300px',
        transform: 'rotateY(var(--scaleStartPaused))',
      })),
      transition('* => *', [
        animate('0.5s'),
      ]),
    ]),
    trigger('goFront', [
      state('front', style({
        top: '0%',
        width: '60vw',
        height: '70vh',
      })),
      state('back', style({
        top: '0%',
        height: '300px',
        width: '300px',
      })),
      transition('* => *', animate('0.5s')),
    ]),
  ],
})
export class SfCarouselComponent implements AfterViewInit {
  experiences$: Observable<Partial<SFExperience>[]> = this.sfExperiencesService.getExperiences().pipe(
    tap((experiences) => this.totalExperiences = experiences.length),
  );

  activeExperience: SFExperience = null;

  totalExperiences = 1;

  slides: HTMLElement[] = [];

  @ViewChild('container', { static: true }) carouselContainer: ElementRef<HTMLElement>;

  constructor(
    private sfExperiencesService: SFExperiencesService,
  ) {}

  ngAfterViewInit() {
    this.carouselContainer.nativeElement.childNodes.forEach((element) => {
      if (element.nodeName === "DIV") {
        this.slides.push(element as HTMLElement);
      }
    });
    this.slides.forEach((slide, i) => {
      slide.style.setProperty('--scaleStart', `${this.getTheta(i, true)}rad`);
      slide.style.setProperty('--scaleEnd', `${this.getTheta(i, false)}rad`);
      slide.style.setProperty('--scaleStartPaused', `${this.getTheta(i, true)}rad`);
      slide.style.setProperty('--scaleEndPaused', `${this.getTheta(i, false)}rad`);
      slide.classList.add('rotate');
    })
  }

  animationDone(container: HTMLElement, experience: SFExperience) {
    if (container.classList.contains('active')) {
      const slide: HTMLElement = container.firstChild as HTMLElement;
      slide.style.setProperty('visibility', 'hidden');
      this.activeExperience = experience;
    }
  }

  mouseOver(element: HTMLElement, enter: boolean) {
    const slide: HTMLElement = element.firstChild as HTMLElement;
    if (element.classList.contains('ng-animating')) {
      return;
    }
    if (enter) {
      if (slide.getAnimations().filter((a) => a.playState === "running").length) {
        return;
      }
      element.classList.add('active');
    }
  }

  pause() {
    this.slides.forEach((slide) => slide.getAnimations().forEach((a) => {
      if ((a as any).animationName === "rotate") {
        slide.style.setProperty('--scaleStartPaused', `${this.getThetaPaused(slide, a.currentTime)}rad`);
        // slide.style.setProperty('--scaleEndPaused', `${this.getTheta(i, false, a.currentTime)}rad`);
        a.pause();
      }
    }));
  }

  mouseLeaveActive() {
    this.activeExperience = null;
    this.slides.forEach((slide) => {
      slide.classList.remove('active');
      slide.getAnimations().forEach((a) => {
        if ((a as any).animationName === "rotate") {
          const slide_: HTMLElement = slide.firstChild as HTMLElement;
          slide_.style.setProperty('visibility', 'visible');
          a.play();
        }
      });
    });
  }

  mouseOverCont(enter: boolean) {
    if (enter) {
      this.slides.forEach((slide, i) => slide.getAnimations().forEach((a) => {
        if ((a as any).animationName === "rotate") {
          if (!slide.classList.contains('active')) {
            slide.style.setProperty('--scaleStartPaused', `${this.getThetaPaused(slide, a.currentTime)}rad`);
          }
          a.pause();
        }
      }));
    } else {
      if (this.activeExperience) {
        return;
      }
      this.slides.forEach((slide) => slide.getAnimations().forEach((a) => {
        if ((a as any).animationName === "rotate") {
          const slide_: HTMLElement = slide.firstChild as HTMLElement;
          slide_.style.setProperty('visibility', 'visible');
          a.play();
          this.activeExperience = null;
        }
      }));
    }
  }

  getTheta(i: number, start: boolean): number {
    // #{($i) * $theta + time / totalTime * 2 * $pi
    // -> $theta = 2 * $pi / N
    // -> N = this.experiences.length
    // -> 2 * $pi ( ($i) / this.experiences.length + time / totalTime )
    let rad = ((this.totalExperiences - i - 1) / this.totalExperiences ) * 2 * Math.PI;
    rad += start ? (4 * Math.PI) : (2 * Math.PI);
    return rad;
  }

  getThetaPaused(element: HTMLElement, time: number): number {
    // #{($i) * $theta + time / totalTime * 2 * $pi
    // -> $theta = 2 * $pi / N
    // -> N = this.experiences.length
    // -> 2 * $pi ( ($i) / this.experiences.length + time / totalTime )
    const startRad = parseFloat(element.style.getPropertyValue('--scaleStart').split('rad')[0]);
    return startRad - (time % 30000) / 30000 * 2 * Math.PI;
  }

  isActive(element: HTMLElement): string {
    return element.classList.contains('active') ? 'front' : 'back';
  }
}