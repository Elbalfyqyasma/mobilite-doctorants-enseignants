import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CdeService } from '../Services/cde/cde.service';
import { StructureRechercheService } from '../Services/StructureRecherche/structure-recherche.service';

@Component({
  selector: 'app-structure-recherche',
  templateUrl: './structure-recherche.component.html',
  styleUrls: ['./structure-recherche.component.css']
})
export class StructureRechercheComponent implements OnInit {
  structureForm!: FormGroup;
  error: any = null;
  success: string | null = null;
  ceds: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
      private cdeS: CdeService,
      private structureS: StructureRechercheService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCEDs();
    this.structureForm = this.formBuilder.group({
      intituleS: ['', Validators.required],
      acronyme: ['', Validators.required],
      directeur: ['', Validators.required],
      ced_id: ['', Validators.required]
    });

    
  }
  onSubmit() {
    this.structureS.addStructureRecherche(this.structureForm.value).subscribe(
      () => {
        console.log('Ajout réussi');
        this.ngZone.run(() => this.router.navigateByUrl('full/SRecherche/list'));
      },
      (error) => {
        console.log(error);
        this.error = error.error.message; // Assuming the error response has a "message" field
      }
    );
  }
  

  fetchCEDs() {
    this.cdeS.getCeds().subscribe(
      (response) => {
        this.ceds = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
