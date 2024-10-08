import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CdeService } from 'src/app/Services/cde/cde.service';
import { StructureRechercheService } from 'src/app/Services/StructureRecherche/structure-recherche.service';

@Component({
  selector: 'app-structure-recherche-edit',
  templateUrl: './structure-recherche-edit.component.html',
  styleUrls: ['./structure-recherche-edit.component.css']
})
export class StructureRechercheEditComponent  implements OnInit{
  object: any;
  structureForm!: FormGroup;
  public error = null;
  public success: string | null = null;
  ceds: any[] = [];
  

  constructor(
    private formBuilder: FormBuilder,
    private cdeS: CdeService,
    private structureS: StructureRechercheService,
    private ngZone: NgZone,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchCEDs();
    const id = this.route.snapshot.paramMap.get('id');
    
    // Fetch the object using the ID
    this.structureS.getStructureRecherche(id).subscribe(
      (object) => {

        this.object = object;

        this.structureForm = this.formBuilder.group({
          intituleS: [object.intituleS, Validators.required],
            acronyme: [object.acronyme, Validators.required],
            directeur: [object.directeur, Validators.required],
            ced_id: [object.ced_id, Validators.required]
        });
        console.log('Form Value:', this.structureForm.value);
      },
      (error) => {
        console.error('Error fetching object:', error);
      }
    );
  }

  onUpdate() {
    const StructureId = this.object.id; // Assuming you have the ID of the Ced to be updated
    const updatedStructure= this.structureForm.value; // Assuming cdeform contains the updated Ced values
  
    this.structureS.updateStructureRecherche(StructureId, updatedStructure).subscribe(
      () => {
        console.log('sructure successfully updated');
        this.ngZone.run(() => this.router.navigateByUrl('full/SRecherche/list'));
      },
      (err) => {
        console.error('Error updating Ced:', err);
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


  getCedIntitule(cedId: number): string {
    const ced = this.ceds.find(c => c.id === cedId);
    return ced ? ced.intitule : '';
  }
  
}
