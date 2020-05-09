import { Injectable } from '@angular/core';
import { FormData,Annonceur,Annonce }       from './formData.model';
//import { Annonce } from '../Annonce';
//import { Annonceur }            from '../Annonceur';
@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }


  private formData: FormData = new FormData();
  private annonceur: Annonceur = new Annonceur();

  private isPersonalFormValid: boolean = false;
   

    getPersonal(): Annonceur {
        var personal: Annonceur = {
            phone: this.annonceur.phone,
            email: this.annonceur.email
        };
        return personal;
    }

    setPersonal(data: Annonceur) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.annonceur.phone = data.phone;
        this.annonceur.email = data.email;
    }

    

   

    getProperties() : Annonce {
        // Return the Properties data
        var annonce: Annonce = {
          //address: this.formData.address,
          //property:this.formData.property,
          prix:this.formData.prix ,
          nom_ecole:this.formData.nom_ecole ,
          image_url:this.formData.image_url ,
          //genre:this.formData.genre,
          type:this.formData.type,
          nb_place:this.formData.nb_place,
          description: this.formData.description,
        };
        return annonce;
    }

    setProperties(data: Annonce) {
        // Update the Address data only when the Address Form had been validated successfully
        //this.formData.address = data.address;
        //this.formData. property = data.property;
        this.formData.prix = data.prix;
        this.formData.nom_ecole = data.nom_ecole;
        this.formData.image_url= data.image_url;
        //this.formData.genre = data.genre;
        this.formData.type = data.type;
        this.formData.nb_place = data.nb_place;
        this.formData.description= data.description;

   
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid ;
                
    }
}
