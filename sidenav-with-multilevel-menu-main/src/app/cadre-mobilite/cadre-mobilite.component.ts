import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadreMobiliteService } from '../Services/CadreMobilite/cadre-mobilite.service';


@Component({
  selector: 'app-cadre-mobilite',
  templateUrl: './cadre-mobilite.component.html',
  styleUrls: ['./cadre-mobilite.component.css']
})
export class CadreMobiliteComponent implements OnInit {
  cadreMobiliteForm!: FormGroup;
  public error: any = null;
  public success: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private cadreMobiliteService: CadreMobiliteService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadreMobiliteForm = this.formBuilder.group({
      libelleC: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.cadreMobiliteService.addCadreMobilite(this.cadreMobiliteForm.value).subscribe(
      () => {
        console.log('Bien ajouté');
        this.ngZone.run(() => this.router.navigateByUrl('full/CadreMobilite/list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
