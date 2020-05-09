import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Annonce }             from '../data/formData.model';
import { FormDataService }     from '../data/form-data.service';
@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  title = 'Fill with local properties';
  property: Annonce;
  form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.property = this.formDataService.getProperties();
        console.log('Address feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setProperties(this.property);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/add']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/result']);
        }
    }

}
