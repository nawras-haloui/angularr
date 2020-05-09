import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../Annonce';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
annonce : Annonce = new Annonce();
  constructor(private _router:Router,private _annonceService:AnnonceService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnnonceInfo();
  }
  searchAnnonce(ecole:string,type:string,capacity:number){
    
    console.log('keywords :',type,ecole,capacity);
    this._router.navigateByUrl('/search/'+ecole+'/'+type+'/'+capacity);

   }

   getAnnonceInfo(){
     const id : number = +this._activatedRoute.snapshot.paramMap.get('id');
     this._annonceService.getAnnonce(id).subscribe(
       data => this.annonce=data
     )


   }
}
