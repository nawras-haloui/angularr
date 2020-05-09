import { Annonceur } from './annonceur';

export class Annonce{
    id: number;
    address:string;
    property:string;
    nom_ecole : string; 
    prix: number;
    description: string;
    nb_place: number;
    type: string;
    image_url:string;
    date_ajout: Date;
    availabe: boolean;
    genre:string;
    annonceur:Annonceur;
}