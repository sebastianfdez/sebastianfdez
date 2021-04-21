import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'sf-carousel',
  templateUrl: 'sf-carousel.component.html',
  animations: [
    trigger('goFrontCont', [
      state('front', style({
        transform: 'rotateY(0deg)',
        position: 'relative',
        width: '60vw',
        left: '20%',
        height: '70vh',
      })),
      state('back', style({
        transform: 'none',
        position: 'absolute',
        height: '300px',
        width: '300px',
      })),
      transition('* => *', [
        query(":self", animate('0.5s')),
        query("@goFront", [
          animateChild(),
        ]),
      ]),
    ]),
    trigger('goFront', [
      state('front', style({
        top: '-40%',
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

  experiences = [
    'exp1',
    'exp2',
    'exp3',
    'exp4',
    'exp5',
    'exp6',
    'exp7',
    'exp8',
  ];

  slides: HTMLElement[] = [];

  @ViewChild('container', { static: true }) carouselContainer: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.carouselContainer.nativeElement.childNodes.forEach((element) => {
      if (element.nodeName === "DIV") {
        this.slides.push(element as HTMLElement);
      }
    });
    this.slides.forEach((slide, i) => {
      slide.style.setProperty('--scaleStart', this.getTheta(i, true));
      slide.style.setProperty('--scaleEnd', this.getTheta(i, false));
      slide.classList.add('rotate');
    })
  }

  mouseOver(element: HTMLElement, enter: boolean) {
    const slide: HTMLElement = element.firstChild as HTMLElement;
    if (enter) {
      if (slide.getAnimations().filter((a) => a.playState === "running").length) {
        return;
      }
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }

  mouseOverCont(enter: boolean) {
    if (enter) {
      this.slides.forEach((slide) => slide.getAnimations().forEach((a) => {
        if ((a as any).animationName === "rotate") {
          a.pause();
        }
      }));
    } else {
      this.slides.forEach((slide) => slide.getAnimations().forEach((a) => {
        if ((a as any).animationName === "rotate") {
          a.play();
        }
      }));
    }
  }

  getTheta(i: number, start: boolean): string {
    // #{($i - 1) * $theta - 2 * $pi
    let rad = (i - 1) * 2 * Math.PI / this.experiences.length;
    rad -= start ? 0 : (2 * Math.PI);
    return `${rad}rad`;
  }

  isActive(element: HTMLElement): string {
    return element.classList.contains('active') ? 'front' : 'back';
  }
}