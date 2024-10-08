import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPays(): Observable<any[]> {
    // Simulated array of countries
    const countries = [
      { id: 1, nom: 'France' },
      { id: 2, nom: 'Espagne' },
      { id: 3, nom: 'Italie' },
      // Add more countries...
      { id: 4, nom: 'Allemagne' },
      { id: 5, nom: 'Royaume-Uni' },
      { id: 6, nom: 'États-Unis' },
      { id: 7, nom: 'Canada' },
      { id: 8, nom: 'Australie' },
      { id: 9, nom: 'Brésil' },
      { id: 10, nom: 'Chine' },
      { id: 11, nom: 'Japon' },
      { id: 12, nom: 'Russie' },
      { id: 13, nom: 'Inde' },
      { id: 14, nom: 'Mexique' },
      { id: 15, nom: 'Argentine' },
      { id: 16, nom: 'Colombie' },
      { id: 17, nom: 'Afrique du Sud' },
      { id: 18, nom: 'Nigeria' },
      { id: 19, nom: 'Egypte' },
      { id: 20, nom: 'Maroc' },
      { id: 21, nom: 'Algerie' },
      { id: 22, nom: 'Tunisie' },
      { id: 23, nom: 'Portugal' },
      { id: 24, nom: 'Pays-Bas' },
      { id: 25, nom: 'Belgique' },
      { id: 26, nom: 'Suisse' },
      { id: 27, nom: 'Suède' },
      { id: 28, nom: 'Norvège' },
      { id: 29, nom: 'Danemark' },
      { id: 30, nom: 'Finlande' },
      { id: 31, nom: 'Grèce' },
      { id: 32, nom: 'Turquie' },
      { id: 33, nom: 'Irlande' },
      { id: 34, nom: 'Autriche' },
      { id: 35, nom: 'Hongrie' },
      { id: 36, nom: 'Pologne' },
      { id: 37, nom: 'République tchèque' },
      { id: 38, nom: 'Slovaquie' },
      { id: 39, nom: 'Roumanie' },
      { id: 40, nom: 'Bulgarie' },
      { id: 41, nom: 'Ukraine' },
      { id: 42, nom: 'Égypte' },
      { id: 43, nom: 'Tunisie' },
      { id: 44, nom: 'Maroc' },
      { id: 45, nom: 'Algérie' },
      { id: 46, nom: 'Libye' },
      { id: 47, nom: 'Soudan' },
      { id: 48, nom: 'Afghanistan' },
      { id: 49, nom: 'Pakistan' },
      { id: 50, nom: 'Indonésie' },
    ];

    return of(countries); // Emit the array as an Observable
  }

  getVillesParPays(idPays: number): Observable<any[]> {
    // Simulated array of cities based on the selected country
    let cities: any[] = [];
  
    switch (idPays) {
      case 1: // France
        cities = [
          { id: 1, nom: 'Paris' },
          { id: 2, nom: 'Marseille' },
          { id: 3, nom: 'Lyon' },
          // Add more cities...
        ];
        break;
      case 2: // Espagne
        cities = [
          { id: 4, nom: 'Madrid' },
          { id: 5, nom: 'Barcelone' },
          { id: 6, nom: 'Valence' },
          // Add more cities...
        ];
        break;
      case 3: // Italie
        cities = [
          { id: 7, nom: 'Rome' },
          { id: 8, nom: 'Milan' },
          { id: 9, nom: 'Venise' },
          // Add more cities...
        ];
        break;
      // Add cases for other countries as needed
  
      // Example for country 4
      case 4: // Allemagne
        cities = [
          { id: 10, nom: 'Berlin' },
          { id: 11, nom: 'Hambourg' },
          { id: 12, nom: 'Munich' },
          // Add more cities...
        ];
        break;
  
      // Example for country 5
      case 5: // Royaume-Uni
        cities = [
          { id: 13, nom: 'Londres' },
          { id: 14, nom: 'Manchester' },
          { id: 15, nom: 'Édimbourg' },
          // Add more cities...
        ];
        break;
  
      // Example for country 6
      case 6: // États-Unis
        cities = [
          { id: 16, nom: 'New York' },
          { id: 17, nom: 'Los Angeles' },
          { id: 18, nom: 'Chicago' },
          // Add more cities...
        ];
        break;
  
      // Add more cases for other countries...
  
      default:
        break;
    }
  
    return of(cities); // Emit the array as an Observable
  }
  
}
