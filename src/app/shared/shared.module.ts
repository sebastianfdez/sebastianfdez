import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FirebaseModule } from './firebase.module';

@NgModule({
  imports: [
    HttpClientModule,
    FirebaseModule,
  ],
  providers: [
    ApiService,
  ]
})
export class SharedModule { }
