import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganismeAcceuilService {
  REST_API: string = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getOrganismes(): Observable<any> {
    const API_URL = `${this.REST_API}/organismes`;
    return this.httpClient.get(API_URL);
  }

  addOrganisme(data: any): Observable<any> {
    const API_URL = `${this.REST_API}/organismes`;
    return this.httpClient.post(API_URL, data).pipe(
      catchError(this.handleError)
    );
  }

  getOrganisme(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/organismes/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders });
  }

  updateOrganisme(id: any, data: any): Observable<any> {
    const API_URL = `${this.REST_API}/organismes/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  deleteOrganisme(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/organismes/${id}`;
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
}
