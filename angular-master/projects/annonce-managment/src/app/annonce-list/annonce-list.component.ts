import { Component, OnInit } from '@angular/core';
import { Annonce } from '../Annonce';
import { Observable } from "rxjs";
import { AnnonceService } from "../annonce.service";
import { Router } from '@angular/router';
import { AnnonceurService } from "../annonceur.service";

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {
  annonces :Annonce [];
  id: number;
  constructor(private annonceService: AnnonceService,private annonceurService: AnnonceurService,
    private router: Router) {
     }

  ngOnInit(): void {

    this.reloadData();
    

  }

  reloadData() {
   this.annonceurService.getAnnonceList().subscribe(
     data => this.annonces = data
    
   )
  }

  deleteAnnonce(id: number) {
    this.annonceService.deleteAnnonce(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  annonceDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
