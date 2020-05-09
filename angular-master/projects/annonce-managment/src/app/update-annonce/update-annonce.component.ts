import { Component, OnInit } from '@angular/core';
import { Annonce } from '../Annonce';
import { AnnonceService } from "../annonce.service";
import {ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {

  id: number;
  annonce: Annonce;

  constructor(private route: ActivatedRoute,private router: Router,
    private annoceService: AnnonceService) { }

  ngOnInit() {
    this.annonce = new Annonce();

    this.id = this.route.snapshot.params['id'];
    
    this.annoceService.getAnnonce(this.id)
      .subscribe(data => {
        console.log(data)
        this.annonce = data;
      }, error => console.log(error));
  }

  updateAnnonce() {
    this.annoceService.updateAnnonce(this.id, this.annonce)
      .subscribe(data => console.log(data), error => console.log(error));
    this.annonce = new Annonce();
    this.gotoList();
  }

  onSubmit() {
    this.updateAnnonce();    
  }

  gotoList() {
    this.router.navigate(['/annonces']);
  }

}
