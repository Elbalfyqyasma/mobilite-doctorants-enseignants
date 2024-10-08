import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { These } from 'src/app/models/these';

@Injectable({
  providedIn: 'root'
})
export class TheseService {
  private REST_API: string = 'http://127.0.0.1:8000/api';
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getThese(id: number): Observable<These> {
    const url = `${this.REST_API}/Theses/${id}`;
    return this.httpClient.get<These>(url).pipe(
      catchError(this.handleError)
    );
  }

  getTheses(): Observable<These[]> {
    const url = `${this.REST_API}/getthese`;
    return this.httpClient.get<These[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  addThese( these: These): Observable<These> {
    const url = `${this.REST_API}/addthese`;
    return this.httpClient.post<These>(url, these, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  updateThese(id: number, these: These): Observable<These> {
    const url = `${this.REST_API}/Theses/${id}`;
    return this.httpClient.put<These>(url, these, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  deleteThese(id: number): Observable<any> {
    const url = `${this.REST_API}/deleteThese/${id}`;
    return this.httpClient.delete(url, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
