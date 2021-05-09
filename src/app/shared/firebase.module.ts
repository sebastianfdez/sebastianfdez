import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { firebaseKeys } from '../../firebase-keys';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseKeys),
    AngularFireStorageModule,
  ],
  providers: [
    FirebaseService,
  ],
})
export class FirebaseModule { }