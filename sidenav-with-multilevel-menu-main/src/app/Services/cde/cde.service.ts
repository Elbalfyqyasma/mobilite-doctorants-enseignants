import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ced } from 'src/app/models/ced';
import { Page } from 'src/app/models/page/page.model';

@Injectable({
  providedIn: 'root'
})
export class CdeService {

  REST_API: string = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  ceds: any[] = [];

  constructor(private httpClient: HttpClient) { }

  addCed(data: Ced): Observable<any> {
    let API_URL = `${this.REST_API}/addced`;
    return this.httpClient.post(API_URL, data).pipe(
      catchError(this.handleError)
    );
  }
  

  getCeds(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/getceds`);
  }

  getCed(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/ced/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders });
  }

  
  updateCed(cedId: any, data: Ced): Observable<any> {
    let API_URL = `${this.REST_API}/ced/${cedId}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    )};



  deleteCed(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/deleteced/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
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



  public getPageCED(page: number, size: number): Observable<Page> {
    return this.getCeds().pipe(
      map((result: any[]) => {
        let index = page * size;
        let totalPages = Math.ceil(result.length / size);
        let pageCed = result.slice(index, index + size);
        return { page: page, size: size, totalPages: totalPages, data: pageCed };
      }),
      catchError(this.handleError)
    );
  }


  
  searchByLibelle(libelle: string): Observable<Ced[]> {
    return this.httpClient.get<Ced[]>(`${this.REST_API}/ceds/search?libelle=${libelle}`);
  }

  
  
}
