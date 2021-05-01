import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'sf-profile-picture',
  templateUrl: './profile-picture.component.html'
})

export class SFProfilePictureComponent implements OnInit {
  imageUrls = [
    'IMG_20200530_155931.jpeg',
    'Capture%20d%E2%80%99e%CC%81cran%202021-04-29%20a%CC%80%2010.09.52.png',
    'IMG_20190826_190218.jpg',
    'WhatsApp%20Image%202021-04-29%20at%2020.21.31.jpeg',
    'IMG_20190817_203917.jpg',
  ];

  active = 0;

  constructor(
    private apiService: ApiService,
  ) {
    setInterval(() => {
      this.active = (this.active + 1) % this.imageUrls.length;
    }, 5000);
  }

  ngOnInit() {}

  getImage(path: string): Observable<any> {
    return this.apiService.getFirebaseImage(path).getDownloadURL();
  }
}