import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { firebaseKeys } from '../../firebase-keys';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseKeys),
    AngularFireStorageModule,
  ],
})
export class FirebaseModule { }