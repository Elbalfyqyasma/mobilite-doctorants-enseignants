import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JarwisService } from '../Services/jarwis.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  RequestResetForm!: FormGroup;
  public error: any = null;
  public success: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private jarwisService: JarwisService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.RequestResetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.RequestResetForm.invalid) {
      return;
    }

    this.toastr.info('Wait...', '', { timeOut: 5000 });
    this.jarwisService.sendPasswordResetLink(this.RequestResetForm.value).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.toastr.error(error?.error?.error || 'An error occurred')
    );
  }

  handleResponse(res: any) {
    console.log(res);
    this.toastr.success(res.data, '', { timeOut: 0 });
    this.RequestResetForm.reset();
  }
}
