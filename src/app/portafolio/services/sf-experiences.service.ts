import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SFExperience } from '../models/sf-experience';

@Injectable()
export class SFExperiencesService {
  constructor() { }

  getExperiences(): Observable<Partial<SFExperience>[]> {
    return of([
      {
        name: 'La 53',
        logo: 'logo53.jpeg',
      },
      {
        name: 'Cotalker',
        logo: 'cotalker.png',
      },
      {
        name: 'Universidad Catolica',
        logo: 'logo-puc.png',
      },
      {
        name: 'Structies',
        logo: 'structies.png',
      },
      {
        name: 'NTN - SNR',
        logo: 'ntn-snr_1.png',
      },
      {
        name: 'DefiQuizz',
        logo: 'defiquizz.png',
      },
      {
        name: 'Iguca',
        logo: 'iguca.png',
      },
      {
        name: 'Hardis Groupe',
        logo: 'Logo_Hardis_Group_.png',
      },
    ].sort((a, b) => Math.random() - 0.5));
  }
}
