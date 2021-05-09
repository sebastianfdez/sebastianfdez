import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {
  URL_API = '';

  constructor(
    private httpClient: HttpClient,
  ) {}

  public get<T>(path: string, params?: {[param: string]: string | string[]}): Observable<T> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get<T>(`${this.URL_API}/${path}`, { headers, params });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }
  
}