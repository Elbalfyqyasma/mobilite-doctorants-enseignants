import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private url : String = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }
  
  signup(data: any) {
    const headers:any = new HttpHeaders().set('Content-Type', 'application/json');

    console.log(data);
    return this.http.post(`${this.url}/signup`, data,{ headers });
  }
  
  login(data: any) {
    
    return this.http.post(`${this.url}/login`, data);
  }
  

 
  sendPasswordResetLink(data:any) {
    return this.http.post(`${this.url}/sendPasswordResetLink`, data)
  }
  
  changePassword(data:any) {
    return this.http.post(`${this.url}/resetPassword`, data)
  }


}
