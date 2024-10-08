import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JarwisService } from './jarwis.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  } 

  constructor(private Token: TokenService ) {



   }
   
   




}
