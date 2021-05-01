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
        logo: 'https://firebasestorage.googleapis.com/v0/b/lyon-roller-open.appspot.com/o/Nouveau%20Logo.jpg?alt=media&token=7b29d038-7c21-474b-94ae-5874a2d5f4d0',
      },
      {
        name: 'Cotalker',
        logo: 'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/te%CC%81le%CC%81chargement.png?alt=media&token=2d81b3d1-af78-48f1-9452-8bf6682725b9',
      },
      {
        name: 'Universidad Catolica',
        logo: 'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/Pontificia-Universidad-Cato%CC%81lica-de-Chile-UC-logo.png?alt=media&token=442730a0-06f6-4523-a7f3-63eb712c2135',
      },
      {
        name: 'Structies',
        logo: 'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/structies.png?alt=media&token=62e6fe23-8ce5-4cc7-b665-8e3e7fad315b',
      },
      {
        name: 'NTN - SNR',
        logo: 'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/ntn-snr_1.jpeg?alt=media&token=86e602b0-f8bb-4d8b-8279-a300069b2664',
      },
      {
        name: 'DefiQuizz',
        logo: 'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/Logo%20final.png?alt=media&token=bc8dcd58-c0f5-4254-9991-a2b2d436efd1',
      },
      {
        name: 'Iguca',
        logo: 'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/iguca.png?alt=media&token=5c6b338c-0ccb-4881-9abf-0d5fc86669db',
      },
      {
        name: 'Hardis Groupe',
        logo: 'https://firebasestorage.googleapis.com/v0/b/iamsebastianfdez.appspot.com/o/Logo_Hardis_Group_.png?alt=media&token=d7c9d813-f311-4d63-951d-19ecf59b5b85',
      },
    ].sort((a, b) => Math.random() - 0.5));
  }
}
