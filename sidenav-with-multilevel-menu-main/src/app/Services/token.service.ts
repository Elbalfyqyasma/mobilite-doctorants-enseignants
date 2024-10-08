import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  private iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  };

  constructor() { }
  
  handle(token: any) {
    this.set(token);
    console.log(this.isValid());
  }

  set(token: any) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1;
      }
    }
    return false;
  }

  payload(token: any) {

    if (token !== undefined) {
      const payload = token.split('.')[1];
      return this.decode(payload);
    } else {
      // Handle the case where yourVariable is undefined
      console.error('yourVariable is undefined');
    }
    return null;

  }


  
  decode(payload:any ) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }


  getUserId() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
    
      if (payload && payload.sub) {
        return payload.sub;
      }
    }
    return null;
  }
}
