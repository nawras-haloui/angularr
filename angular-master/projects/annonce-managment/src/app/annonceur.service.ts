import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from './Annonce';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnonceurService {

  private baseUrl = 'http://localhost:8080/api/v1/annonceurs/'+1+'/annonce';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAnnonceList(): Observable<Annonce[]> {
    return this.http.get<getResponse>(this.baseUrl).pipe(
    map(response => response._embedded.annonces)
    );
    
    
  }

  

  
  
}

interface getResponse{
  _embedded : {
    annonces : Annonce[];
  }
    
}
