import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { Page } from 'src/app/models/page/page.model';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  REST_API: string = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  ceds: any[] = [];

  constructor(private httpClient: HttpClient) { }
  

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/getusers`);
  }

  getUser(id: any): Observable<any> {
    const API_URL = `${this.REST_API}/user/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders });
  }



  deleteUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/deleteUser/${id}`;
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



  public getPageUSER(page: number, size: number): Observable<Page> {
    return this.getUsers().pipe(
      map((result: any[]) => {
        let index = page * size;
        let totalPages = Math.ceil(result.length / size);
        let pageUser = result.slice(index, index + size);
        return { page: page, size: size, totalPages: totalPages, data: pageUser };
      }),
      catchError(this.handleError)
    );
  }




  
  searchByNom(libelle: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.REST_API}/ceds/search?libelle=${libelle}`);
  }

  updateProfile(userId: any, data: any): Observable<any> {
    const API_URL = `${this.REST_API}/ProfilUser/${userId}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }
  
  
  
}
