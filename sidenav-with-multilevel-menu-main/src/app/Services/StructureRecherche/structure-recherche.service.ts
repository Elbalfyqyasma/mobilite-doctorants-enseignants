import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ced } from 'src/app/models/ced';
import { Page } from 'src/app/models/page/page.model';
import { StructureRecherche } from 'src/app/models/structure-recherche';

@Injectable({
  providedIn: 'root'
})
export class StructureRechercheService {

  REST_API: string = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  addStructureRecherche(data: StructureRecherche): Observable<any> {
    console.log(data);
    const API_URL = `${this.REST_API}/addstructure`;
    return this.httpClient.post(API_URL, data).pipe(
      catchError(this.handleError)
    );
  }

  getStructureRecherches(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/getstructures`);
  }

  getStructureRecherche(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/structure/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders });
  }

  updateStructureRecherche(structureId: any, data: StructureRecherche): Observable<any> {
    const API_URL = `${this.REST_API}/structure/${structureId}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  deleteStructureRecherche(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/deletestructure/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


  public getPageStructureRecherche(page: number, size: number): Observable<Page> {
    return this.getStructureRecherches().pipe(
      map((result: StructureRecherche[]) => {
        let index = page * size;
        let totalPages = Math.ceil(result.length / size);
        let pageData = result.slice(index, index + size);
        return { page: page, size: size, totalPages: totalPages, data: pageData };
      }),
      catchError(this.handleError)
    );
  }

  searchByIntitule(intitule: string): Observable<StructureRecherche[]> {
    return this.httpClient.get<StructureRecherche[]>(`${this.REST_API}/structures/search?intitule=${intitule}`);
  }



  searchByCed(cedId: any): Observable<StructureRecherche[]> {
    return this.httpClient.get<StructureRecherche[]>(`${this.REST_API}/structures/ced/${cedId}`);
  }

}
