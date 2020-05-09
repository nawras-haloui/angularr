import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Annonce } from './Annonce';

let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseUrl = 'http://localhost:8080/api/v1/annonces';
  constructor(private http: HttpClient) { }

  createAnnonce(annonce: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, annonce);
  }

  
  getAnnonce(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.baseUrl}/${id}`);
  }

  

  updateAnnonce(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnnonce(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  
    getAnnonceList(nom :string): Observable<Annonce[]> {
      const searchUrl = `${this.baseUrl}/search/name?nom=${nom}`;
      return this.http.get<getResponse>(searchUrl).pipe(
      map(response => response._embedded.annonces)
      );
     
    }

    search(nom :string,type:string,capacity:number): Observable<Annonce[]> {
      const searchUrl = `${this.baseUrl}/search/searchBox?nom=${nom}&type=${type}&nombre=${capacity}`;
      return this.http.get<getResponse>(searchUrl).pipe(
      map(response => response._embedded.annonces)
      );
     
    }

    getCount(): Observable<any>{
      return this.http.get<getCount>(`${this.baseUrl}`).pipe(
        map(response => response.page.totalElements)
        );
    ;
    }
  
   recentAdd(): Observable<Annonce[]> {
    const searchUrl = `${this.baseUrl}/search/tri`;
    return this.http.get<getResponse>(searchUrl).pipe(
    map(response => response._embedded.annonces)
    );

   }

   prixAsc(nom :string,type:string,capacity:number): Observable<Annonce[]> {
    const searchUrl = `${this.baseUrl}/search/prixA?nom=${nom}&type=${type}&nombre=${capacity}`;
    return this.http.get<getResponse>(searchUrl).pipe(
    map(response => response._embedded.annonces)
    );

   }

   prixDesc(nom :string,type:string,capacity:number): Observable<Annonce[]> {
    const searchUrl = `${this.baseUrl}/search/prixD?nom=${nom}&type=${type}&nombre=${capacity}`;
    return this.http.get<getResponse>(searchUrl).pipe(
    map(response => response._embedded.annonces)
    );

   }
    
  }
  
  interface getResponse{
    _embedded : {
      annonces : Annonce[];
    }

    
      
  }

  interface getCount{
    page : {
      totalElements : number;
    }
  }