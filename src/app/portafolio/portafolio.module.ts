import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SfPortafolioComponent } from './sf-portafolio.component';
import { SFProfilePictureComponent } from './profile-picture/profile-picture.component';
import { CommonModule } from '@angular/common';
import { SfCarouselComponent } from './sf-carousel/sf-carousel.component';

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
  ],
  providers: [],
})
export class SfPortafolioModule { }
