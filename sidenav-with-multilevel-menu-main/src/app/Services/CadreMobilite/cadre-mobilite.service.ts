import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CadreMobilite } from 'src/app/models/cadre-mobilite';
import { Page } from 'src/app/models/page/page.model';

@Injectable({
  providedIn: 'root'
})
export class CadreMobiliteService {

  REST_API: string = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  addCadreMobilite(data: CadreMobilite): Observable<any> {
    let API_URL = `${this.REST_API}/add-cadre-mobilite`;
    return this.httpClient.post(API_URL, data).pipe(
      catchError(this.handleError)
    );
  }

  getCadresMobilite(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/get-cadres-mobilite`);
  }

  getCadreMobilite(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/cadre-mobilite/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders });
  }

  updateCadreMobilite(id: any, data: CadreMobilite): Observable<any> {
    let API_URL = `${this.REST_API}/cadre-mobilite/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  deleteCadreMobilite(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-cadre-mobilite/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  searchCadresMobilite(libelle: string): Observable<CadreMobilite[]> {
    return this.httpClient.get<CadreMobilite[]>(`${this.REST_API}/cadres-mobilite/search?libelle=${libelle}`);
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

  public getPageCadresMobilite(page: number, size: number): Observable<Page> {
    return this.getCadresMobilite().pipe(
      map((result: any[]) => {
        let index = page * size;
        let totalPages = Math.ceil(result.length / size);
        let pageCadresMobilite = result.slice(index, index + size);
        return { page: page, size: size, totalPages: totalPages, data: pageCadresMobilite };
      }),
      catchError(this.handleError)
    );
  }
}
