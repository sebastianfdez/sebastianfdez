import { Component, Input } from '@angular/core';
import { SFExperience } from '../../models/sf-experience';

@Component({
  selector: 'sf-active-slide',
  templateUrl: 'sf-active-slide.component.html'
})

export class SFActiveSlideComponent {
  @Input() experience: SFExperience = null;
}