import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {
  URL_API = '';

  cacheImage: Map<string, Blob> = new Map<string, Blob>();

  constructor(
    private httpClient: HttpClient,
    private storage: AngularFireStorage,
  ) {}

  public get<T>(path: string, params?: {[param: string]: string | string[]}): Observable<T> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get<T>(`${this.URL_API}/${path}`, { headers, params });
  }

  public getFirebaseImage(imageUrl: string): AngularFireStorageReference {
    return this.storage.ref(imageUrl);
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }
  
}