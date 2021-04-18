import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SFHomeLogoComponent } from './home-logo/home-logo.component';
import { SFHomepageComponent } from './home-page.component';

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
    SFHomepageComponent,
  ],
  providers: [],
})
export class HomePageModule { }
