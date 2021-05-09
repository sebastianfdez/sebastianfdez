import { Component, OnInit } from '@angular/core';
import { AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'sf-profile-picture',
  templateUrl: './profile-picture.component.html'
})

export class SFProfilePictureComponent implements OnInit {
  imageUrls = [
    'IMG_20200530_155931.jpeg',
    'profile-pic2.png',
    'IMG_20190826_190218.jpg',
    'profile-pic1.jpeg',
    'IMG_20190817_203917.jpg',
  ];

  active = 0;

  constructor(
    private firebaseService: FirebaseService,
  ) {
    setInterval(() => {
      this.active = (this.active + 1) % this.imageUrls.length;
    }, 5000);
  }

  ngOnInit() {}

  getImage(path: string): Observable<any> {
    return this.firebaseService.getImageSrc(path);
  }
}