import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CadreMobiliteService } from 'src/app/Services/CadreMobilite/cadre-mobilite.service';

@Component({
  selector: 'app-cadre-mobilite-edit',
  templateUrl: './cadre-mobilite-edit.component.html',
  styleUrls: ['./cadre-mobilite-edit.component.css']
})
export class CadreMobiliteEditComponent implements OnInit {
  cadreMobilite: any;
  cadreMobiliteForm!: FormGroup;
  public error: any = null;
  public success: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private cadreMobiliteService: CadreMobiliteService,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Fetch the cadre mobilite using the ID
    this.cadreMobiliteService.getCadreMobilite(id).subscribe(
      (cadreMobilite) => {
        this.cadreMobilite = cadreMobilite;

        this.cadreMobiliteForm = this.formBuilder.group({
          libelleC: [cadreMobilite.libelleC, Validators.required],
          description: [cadreMobilite.description, Validators.required]
        });

        console.log('Form Value:', this.cadreMobiliteForm.value);
      },
      (error) => {
        console.error('Error fetching cadre mobilite:', error);
      }
    );
  }

  onUpdate(): void {
    const cadreMobiliteId = this.cadreMobilite.id; // Assuming you have the ID of the Cadre Mobilite to be updated
    const updatedCadreMobilite = this.cadreMobiliteForm.value; // Assuming cadreMobiliteForm contains the updated Cadre Mobilite values

    this.cadreMobiliteService.updateCadreMobilite(cadreMobiliteId, updatedCadreMobilite).subscribe(
      () => {
        console.log('Cadre mobilite successfully updated');
        this.ngZone.run(() => this.router.navigateByUrl('full/CadreMobilite/list'));
      },
      (err) => {
        console.error('Error updating cadre mobilite:', err);
      }
    );
  }
}
