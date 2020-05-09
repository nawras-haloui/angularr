import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../Annonce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  annonces: Annonce[];

  constructor(private _annonceService: AnnonceService,private _router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this._annonceService.recentAdd().subscribe(
      data => this.annonces = data
     
    )
   }

   searchAnnonce(ecole:string,type:string,capacity:number){
    
    console.log('keywords :',type,ecole,capacity);
    this._router.navigateByUrl('/search/'+ecole+'/'+type+'/'+capacity);
   }
}
