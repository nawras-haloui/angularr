import {Deserializable} from "../deserializable.model";

export class FormData {
    //email:string;
    //phone:string;
    description : string ='';
    image_url :string='';
    nb_place : number=0;
    nom_ecole: string = '';
    prix: number=0;
    type: string='';
    

    clear() {
    /*this.email = '';
    this.phone=''*/
    this.prix=0;
    this.nom_ecole= '';
    this.image_url ='';
    this.type='';
    this.nb_place=0;
    this.description ='';
    }
}

export class Annonceur {
    email:string;
    phone:string;

}

export class Annonce {
    prix: number=0;
    nom_ecole: string = '';
    image_url :string='';
    type: string='';
    nb_place : number=0;
    description : string ='';
    //annonceur:Annonceur;

    
}
