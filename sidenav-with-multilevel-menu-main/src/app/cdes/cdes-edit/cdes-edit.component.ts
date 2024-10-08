import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CdeService } from 'src/app/Services/cde/cde.service';

@Component({
  selector: 'app-cdes-edit',
  templateUrl: './cdes-edit.component.html',
  styleUrls: ['./cdes-edit.component.css']
})
export class CdesEditComponent implements OnInit{
  object: any;
  cdeform!: FormGroup;
  public error = null;
  public success: string | null = null;
  

  constructor(private formBuilder: FormBuilder, private cdeS : CdeService, private ngZone:NgZone,private route: ActivatedRoute, private  routee : Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    // Fetch the object using the ID
    this.cdeS.getCed(id).subscribe(
      (object) => {

        this.object = object;

        this.cdeform = this.formBuilder.group({
          intitule: [object.intitule, Validators.required],
          description: [object.description, Validators.required]
        });
        console.log('Form Value:', this.cdeform.value);
      },
      (error) => {
        console.error('Error fetching object:', error);
      }
    );
  }

  onUpdate() {
    const cedId = this.object.id; // Assuming you have the ID of the Ced to be updated
    const updatedCed = this.cdeform.value; // Assuming cdeform contains the updated Ced values
  
    this.cdeS.updateCed(cedId, updatedCed).subscribe(
      () => {
        console.log('structure successfully updated');
        this.ngZone.run(() => this.routee.navigateByUrl('full/cdes/list'));
      },
      (err) => {
        console.error('Error updating Ced:', err);
      }
    );
  }

  }
  
  








