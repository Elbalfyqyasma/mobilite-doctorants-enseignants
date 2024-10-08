import { AfterViewInit, Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Ced } from '../models/ced';
import { StructureRecherche } from '../models/structure-recherche';
import { User } from '../models/user.model';
import { CdeService } from '../Services/cde/cde.service';
import { ProductionScientifiqueService } from '../Services/production-scientifique.service';
import { StructureRechercheService } from '../Services/StructureRecherche/structure-recherche.service';
import { TheseService } from '../Services/these.service';
import { TokenService } from '../Services/token.service';
import { UserService } from '../Services/user/user.service';




@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  ceds: Ced[] = []; // Replace with your CEDs array
  structures: StructureRecherche[] = []; // Replace with your Structures array
  years: number[] = [];
  tinymce!: any;
  selectedType: any ;

  userId:any;
  user!: User;


  productionsData: any[] = [];



  constructor(
    private formBuilder: FormBuilder,
    private cdeS: CdeService,
    private structureS: StructureRechercheService ,
    private tokenService:TokenService,
    private userService : UserService ,
  private  theseService : TheseService ,
  private productionScientifiqueService:ProductionScientifiqueService) {}

  personalDetails!: FormGroup;
  theseDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;



  ngOnInit() {
    this.fetchStructurederecherche();
    this.fetchCEDs();
    this.getIdUser();

    
    
    this.personalDetails = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      ced_id: ['', Validators.required],
      StructureRecherche: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.theseDetails = this.formBuilder.group({
      titreT: ['', Validators.required],
      Encadrant: ['', Validators.required],
      AnneeThesse: ['', Validators.required],
      descriptionT: ['', Validators.required],
      impactRegion: ['', Validators.required],
      user_id:[this.userId]
    });

    this.educationalDetails = this.formBuilder.group({
      TitreP:['', Validators.required],
      Type:[this.selectedType, Validators.required],
      descriptionA:['', Validators.required],
      intituleC:['', Validators.required],
      descriptionC:['', Validators.required],
      dateM:['', Validators.required],
      lieuM:['', Validators.required],
      dateP:['', Validators.required],
      numPage:['', Validators.required],


    });

    this.educationalDetails = this.formBuilder.group({
      TitreP: ['', Validators.required],
      user_id:[this.userId],
      Type: [this.selectedType, Validators.required],
      descriptionA: [''],
      intituleC: [''],
      descriptionC: [''],
      dateM: [''],
      lieuM: [''],
      dateP: [''],
      numPage: [''],
      titreR: [''],
      volumeR: ['']
    });
    

    
    if (this.selectedType === 'autre') {
      this.educationalDetails.controls['descriptionA'].setValidators([Validators.required]);
    } else if (this.selectedType === 'communication') {
      this.educationalDetails.controls['intituleC'].setValidators([Validators.required]);
      this.educationalDetails.controls['descriptionC'].setValidators([Validators.required]);
      this.educationalDetails.controls['dateM'].setValidators([Validators.required]);
      this.educationalDetails.controls['lieuM'].setValidators([Validators.required]);
    } else if (this.selectedType === 'article') {
      this.educationalDetails.controls['dateP'].setValidators([Validators.required]);
      this.educationalDetails.controls['numPage'].setValidators([Validators.required]);
      this.educationalDetails.controls['titreR'].setValidators([Validators.required]);
      this.educationalDetails.controls['volumeR'].setValidators([Validators.required]);
    }
    
    this.educationalDetails.controls['user_id'].setValue(this.userId);
console.log(this.userId);

    this.generateYearOptions();


    this.getInfoUser();
  }

  

  get personal() {
    return this.personalDetails.controls;
  }

  get address() {
    return this.theseDetails.controls;
  }

  get education() {
    return this.educationalDetails.controls;
  }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return;
      }
      this.step++;
    } else if (this.step == 2) {
      this.address_step = true;
      if (this.theseDetails.invalid) {
        return;
      }
      this.step++;
    }
  }

  previous() {
    this.step--;

    if (this.step == 1) {
      this.address_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }
  }

  submit() {
    if (this.step == 3) {
      this.education_step = true;
      if (this.educationalDetails.invalid) {
        return;
      }
      alert('Well done!!');
    }
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

  fetchStructurederecherche() {
    this.structureS.getStructureRecherches().subscribe(
      (response) => {
        this.structures = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const startYear = 1981;
    this.years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
  }


  onTypeChange(event:any) {
    this.selectedType = event.target.value;
    console.log(event.target.value);

    console.log(this.selectedType);


    this.educationalDetails.controls['user_id'].setValue(this.userId);

    console.log(this.educationalDetails.controls['user_id'].getRawValue());

  }

  getIdUser() {
    this.userId = this.tokenService.getUserId();
    console.log(this.userId); // Output the user ID
  }
  


  getInfoUser() {
    this.userService.getUser(this.userId).subscribe(
      (userData) => {
        this.personalDetails = this.formBuilder.group({
          nom: [userData.nom, Validators.required],
          prenom: [userData.prenom, Validators.required],
          email: [userData.email, Validators.required],
          telephone: ['', Validators.required],
          ced_id: ['', Validators.required],
          StructureRecherche: ['', Validators.required],
          role: [userData.role, Validators.required]
        });
      },
      (error) => {
        console.log(error);
      }
    );
    
  }



  submitForms() {
    // Get the form data
    const personalData = this.personalDetails.value;
    const thesisData = this.theseDetails.value;
    const educationalData = this.educationalDetails.value;
  
    // Create an object to hold all the form data
    const formData = {
      personalDetails: personalData,
      theseDetails: thesisData,
      educationalDetails: educationalData
    };

    console.log(thesisData);
      

    this.userService.updateProfile(this.userId, personalData).subscribe(
      (response) => {
        // Handle success response
        console.log(response);
      },
      (error) => {
        // Handle error
        console.error(error);
      }
    );
   
    this.theseService.addThese(thesisData).subscribe(
      (response) => {
        // Handle success response
        console.log(response);
      },
      (error) => {
        // Handle error
        console.error(error);
      });


 
      // Call the addProductionScintifique function for each production data
  this.productionsData.forEach((productionData) => {
    this.productionScientifiqueService.createProductionScientifique(productionData).subscribe(
      (response) => {
        // Handle success response
        console.log(response);
      },
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  });
    
  alert('Bien ajoutee');

  }
  

  addProductionData() {
    console.log(this.educationalDetails);

    if (this.educationalDetails.valid) {
      this.productionsData.push(this.educationalDetails.value);
      // Reset the form after adding the data
      this.educationalDetails.reset();
    }
    console.log(this.productionsData);
  }

  deleteProductionData(index: number) {
    this.productionsData.splice(index, 1);
  }
  
  


  



    
  
  
  

  
}
