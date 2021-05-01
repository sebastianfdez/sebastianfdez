import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfPortafolioComponent } from './sf-portafolio.component';
import { SFProfilePictureComponent } from './profile-picture/profile-picture.component';
import { CommonModule } from '@angular/common';
import { SfCarouselComponent } from './sf-carousel/sf-carousel.component';
import { SFExperiencesService } from './services/sf-experiences.service';
import { SFActiveSlideComponent } from './sf-carousel/sf-active-slide/sf-active-slide.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SfPortafolioComponent,
      }
    ]),
  ],
  exports: [],
  declarations: [
    SfPortafolioComponent,
    SFProfilePictureComponent,
    SfCarouselComponent,
    SFActiveSlideComponent,
  ],
  providers: [
    SFExperiencesService,
  ],
})
export class SfPortafolioModule { }
