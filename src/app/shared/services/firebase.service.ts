import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FirebaseService {
  private cacheImage: Map<string, Observable<string>> =
    new Map<string, Observable<string>>();

  constructor(
    private storage: AngularFireStorage,
  ) {}

  public getImageSrc(imageName: string): Observable<string> {
    if (!this.cacheImage.has(imageName)) {
      const ref: AngularFireStorageReference = this.storage.ref(imageName);
      this.cacheImage.set(imageName, ref.getDownloadURL());
    }
    return this.cacheImage.get(imageName);
  }
  
}