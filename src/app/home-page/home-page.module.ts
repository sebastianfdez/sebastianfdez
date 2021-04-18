import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SFHomeLogoComponent } from './home-logo/home-logo.component';
import { SFHomepageComponent } from './home-page.component';
import { SFProfilePictureComponent } from './profile-picture/profile-picture.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SFHomepageComponent,
      }
    ]),
  ],
  declarations: [
    SFHomeLogoComponent,
    SFProfilePictureComponent,
    SFHomepageComponent,
  ],
  providers: [],
})
export class HomePageModule { }
