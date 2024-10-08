import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  public error = [];


  constructor(private formBuilder: FormBuilder, private Jarwis: JarwisService,private Token:TokenService, private router : Router ) {

  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['', [Validators.required]],
        confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
}



  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }


  onRegisterSubmit() {
    const formData = { ...this.registerForm.value };
    delete formData.controls; // Omit the 'controls' property causing the circular reference
    this.Jarwis.signup(formData)
        .subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
}


handleError(error: any) {
  this.error = error.error.error;
  // Handle the error appropriately
}



handleResponse(data:any) {
  this.Token.handle(data.access_token);
  this.router.navigateByUrl('/login');

}


}
