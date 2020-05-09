import { Component, OnInit,Input } from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }        from '../data/form-data.service';
import { AnnonceService } from '../annonce.service';
//import { Annonce } from '../Annonce';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Annonceur ,Annonce}            from '../data/formData.model';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'Review and submit';
  @Input() formData: FormData;
  isFormValid: boolean = false;
  personal: Annonceur ;
  annonce : Annonce;
  submitted = false;
  constructor(private annonceService: AnnonceService,private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      this.isFormValid = this.formDataService.isFormValid();
      console.log(this.formData);
      console.log('Result feature loaded!');
  }

  newAnnonce(): void {
    this.submitted = false;
    
    //this.annonce = new Annonce();
  }

  save() {
    console.log(this.formData);

    this.annonceService.createAnnonce(this.formData)
          .subscribe(data => console.log(data), error => console.log(error));

    this.annonce = new Annonce();
  }

  submit() {
      alert('form submitted!');
      this.submitted = true;
      this.save(); 
      this.formData = this.formDataService.resetFormData();
      this.isFormValid = false;
     
  }

}
