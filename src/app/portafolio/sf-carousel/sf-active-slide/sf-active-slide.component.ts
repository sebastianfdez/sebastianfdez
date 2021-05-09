import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, take, tap } from 'rxjs/operators';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { SFExperience } from '../../models/sf-experience';

@Component({
  selector: 'sf-active-slide',
  templateUrl: 'sf-active-slide.component.html',
  animations: [
    trigger('showDetailsImg', [
      state('show', style({
        width: '20%',
      })),
      state('hide', style({
        width: '100%',
      })),
      transition('* => *', [
        animate('0.5s'),
      ]),
    ]),
    trigger('showDetails', [
      state('show', 
        style({ transform: 'translateX(0%)' }),
      ),
      state('hide', 
        style({
          transform: 'translateX(-100%)'
        }),
      ),
      transition('* => *', [
        animate('0.5s'),
      ]),
    ]),
  ],
})

export class SFActiveSlideComponent implements OnInit {
  @Input() experience: SFExperience = null;

  @ViewChild('activeContainer', { static: false }) activeContainer: ElementRef<HTMLElement>;

  imageSrc$: Observable<string>;

  constructor(
    private firebaseService: FirebaseService,
  ) { }
  
  ngOnInit() {
    this.imageSrc$ = this.firebaseService.getImageSrc(this.experience.logo).pipe(
      take(1),
    );
    setTimeout(() => {
      if (this.activeContainer) {
        // sthis.activeContainer.nativeElement.classList.add('show-details');
      }
    }, 500);
  }

  isActive(element: HTMLElement): string {
    return element.classList.contains('show-details') ? 'show' : 'hide';
  }

  activeElement(activeContainer: HTMLElement, elements: HTMLElement[]): void {
    if (activeContainer.classList.contains('show-details')) {
      setTimeout(() => {
        if (elements) {
          elements.forEach((e) => e.classList.add('show-details'));
        }
      }, 500);
    }
  }
}