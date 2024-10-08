import { Component ,OnInit,NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{Router} from '@angular/router'
import { CdeService } from '../Services/cde/cde.service';

@Component({
  selector: 'app-cdes',
  templateUrl: './cdes.component.html',
  styleUrls: ['./cdes.component.css']
})
export class CdesComponent implements OnInit {
  cdeform!: FormGroup;
  public error = null;
  public success: string | null = null;



  constructor(private formBuilder: FormBuilder, private cdeS : CdeService, private ngZone:NgZone,private router:Router, 
    ) {}

  ngOnInit(): void {
    this.cdeform = this.formBuilder.group({
      intitule: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onSubmit() {
    this.cdeS.addCed(this.cdeform.value).subscribe(
      () => {
        console.log('bien ajouter');
        this.ngZone.run(() => this.router.navigateByUrl('full/cdes/list'))
      },
      (err) => {
        console.log(err);
      }
    )
  }


}
