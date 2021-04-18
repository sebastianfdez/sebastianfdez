import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sf-profile-picture',
  templateUrl: './profile-picture.component.html'
})

export class SFProfilePictureComponent implements OnInit {
  imageUrls = [
    'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/IMG_20190826_190218.jpg?alt=media&token=c02dd603-af89-4b49-93c4-0cd079492c15',
    'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/20181017_140601.jpg?alt=media&token=e029796f-7c7f-4d8e-b1ef-ad147c73f107',
    'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/IMG_20190817_203917.jpg?alt=media&token=c33bc092-f275-4f2a-81e1-d5b57cf78efe',
  ];

  active = 0;

  constructor() {
    setInterval(() => {
      this.active = (this.active + 1) % this.imageUrls.length;
    }, 5000);
  }

  ngOnInit() { }
}