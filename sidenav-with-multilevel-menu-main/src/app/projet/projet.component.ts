import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { CadreMobiliteService } from '../Services/CadreMobilite/cadre-mobilite.service';
import { DataService } from '../Services/data.service';
import { OrganismeAcceuilService } from '../Services/organisme-aceuil.service';
import{Router} from '@angular/router';
import { ProjetService } from '../Services/projet.service';
import { UserService } from '../Services/user/user.service';
import { TokenService } from '../Services/token.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: 'projet.component.html',
  styleUrls: ['projet.component.css']
})
export class ProjetComponent implements OnInit {
  OrganisationDetails!: FormGroup;
  projetDetails!: FormGroup;

  organisation_step = false;
  projet_step = false;
  step = 1;
  userId!: Number;
  user!: User;

  payss!: any[]; // Array to store countries
  villes!: any[]; // Array to store cities

  cadres: any[] = [];

  selectedCountry!: Number; // New property for selected country
  selectedCity!: Number; // New property for selected city

  organismeId!:any;

  invitationFile: File | undefined;



  constructor(   private httpClient: HttpClient,    private tokenService:TokenService,  private userService : UserService ,private formBuilder: FormBuilder,  private ngZone:NgZone,private dataService: DataService, private cadreMobiliteService:CadreMobiliteService , private organismeAcceuilService:OrganismeAcceuilService,private router:Router, private projetService:ProjetService) {}

  ngOnInit() {
    this.getIdUser();
    this.fetchCadre();
    // Initialize form groups and set up form validation
    this.OrganisationDetails = this.formBuilder.group({
      intitule: ['', Validators.required],
      pays: ['', Validators.required],
      ville: ['', Validators.required]
    });

    this.projetDetails = this.formBuilder.group({
      user_id: [this.userId], // Add appropriate validation if needed
      intituleP: ['', Validators.required],
      cadre_mobilite_id:['', Validators.required],
      encadrant: ['', Validators.required],
      dateM: ['', Validators.required],
      dateF: ['', Validators.required],
      descriptionP: ['', Validators.required],
      resultatattendu: ['', Validators.required],
      travaux: ['', Validators.required],
      invitation: ['', Validators.required] ,// Add appropriate validation if needed
      organismeId:[this.organismeId]

    });

    this.dataService.getPays().subscribe((payss: any[]) => {
      this.payss = payss;
      console.log(this.payss);
    });


  }

  get organisation() {
    return this.OrganisationDetails.controls;
  }

  get projet() {
    return this.projetDetails.controls;
  }

  next() {
    if (this.step === 1) {
      this.organisation_step = true;
      if (this.OrganisationDetails.invalid) {
        return;
      }
      this.step++;
    } else if (this.step === 2) {
      this.projet_step = true;
      if (this.projetDetails.invalid) {
        return;
      }
      this.step++;
    }
  }

  previous() {
    this.step--;
    if (this.step === 1) {
      this.projet_step = false;
    }
  }

  submitForms() {
    const OrganisationData = this.OrganisationDetails.value;
    const projetData = this.projetDetails.value;
  
    this.organismeAcceuilService.addOrganisme(this.OrganisationDetails.value).subscribe(
      (organismeResponse) => {
        console.log('Organisme ajouté avec succès');
        console.log(organismeResponse);
  
        this.organismeId = organismeResponse.id;
  
        this.projetDetails.controls['organismeId'].setValue(this.organismeId);
  
        if (!this.invitationFile) {
          console.log('No file selected');
          return;
        }
  
        const formData = new FormData();
        formData.append('invitation', this.invitationFile, this.invitationFile.name);
  
        // Append other form data
        formData.append('intituleP', projetData.intituleP);
        formData.append('dateM', projetData.dateM);
        formData.append('dateF', projetData.dateF);
        formData.append('descriptionP', projetData.descriptionP);
        formData.append('encadrant', projetData.encadrant);
        formData.append('travaux', projetData.travaux);
        formData.append('resultatattendu', projetData.resultatattendu);
        formData.append('cadre_mobilite_id', projetData.cadre_mobilite_id);
        formData.append('user_id', projetData.user_id);
  
        this.httpClient.post<any>('http://localhost:8000/api/upload', formData).subscribe(
          (response) => {
            console.log('File uploaded successfully');
            console.log(response);
  
            // Use the file path returned from Laravel in your application as needed
            // Here, you can retrieve the response.path and include it in your project data
            const filePath = response.path;
            formData.append('invitation', filePath);
  
            this.projetService.addProject(formData).subscribe(
              (projectResponse) => {
                console.log('Projet ajouté avec succès');
                console.log(projectResponse);
              },
              (projectError) => {
                console.log('Erreur lors de l\'ajout du projet');
                console.log(projectError);
              }
            );
          },
          (error) => {
            console.log('Error uploading file');
            console.log(error);
          }
        );
      }
    );
    alert('bien ajoute')
  }
  
// ...

onCountryChange(event: any) {

  this.selectedCountry = event.target.value;// Assign the selected country to the property
  this.villes = []; // Clear the cities array
 
  // Use the selected countryId to fetch the corresponding cities from the data service
  this.dataService.getVillesParPays(Number(this.selectedCountry)).subscribe((cities: any[]) => {
    this.villes = cities;
    console.log(this.selectedCountry);
    console.log(this.villes);
  });
}




fetchCadre() {
  this.cadreMobiliteService.getCadresMobilite().subscribe(
    (response) => {
      this.cadres = response;
      console.log(this.cadres);
    },
    (error) => {
      console.log(error);
    }
  );
}


getIdUser() {
  this.userId = parseInt(this.tokenService.getUserId(), 10);
    console.log(this.userId); // Output the user ID
}




onFileChange(event: any) {
  this.invitationFile = event.target.files[0];
}




}
