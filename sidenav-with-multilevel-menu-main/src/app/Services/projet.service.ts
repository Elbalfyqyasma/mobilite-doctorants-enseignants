import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  REST_API: string = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<any> {
    const API_URL = `${this.REST_API}/projects`;
    return this.httpClient.get(API_URL);
  }

  addProject(data: any): Observable<any> {
    const API_URL = `${this.REST_API}/projects`;
    return this.httpClient.post(API_URL, data).pipe(
      catchError(this.handleError)
    );
  }

  getProject(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/projects/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders });
  }

  updateProject(id: any, data: any): Observable<any> {
    const API_URL = `${this.REST_API}/projects/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  deleteProject(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/projects/${id}`;
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
