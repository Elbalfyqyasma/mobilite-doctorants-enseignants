import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm !: FormGroup;
  public error = null;
  public success: string | null = null;


  constructor(private formBuilder: FormBuilder, private Jarwis: JarwisService, private Token:TokenService ,private router: Router, private Auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required] ,
      password: ['', Validators.required]
    });


  }

  onSubmit() {
    const formData = { ...this.loginForm.value };
    delete formData.controls; // Omit the 'controls' property causing the circular reference
  
    this.Jarwis.login(formData)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

  } 

  
  
  handleError(error:any){
    this.error = error.error.error;


  } 

handleResponse(data: any) {
  this.Token.handle(data.access_token);
  this.Auth.changeAuthStatus(true);
  this.router.navigateByUrl('/full/dashboard');

    
}


}
