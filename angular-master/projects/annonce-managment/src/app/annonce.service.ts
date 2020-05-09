import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

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

  
  getAnnonce(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  

  updateAnnonce(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnnonce(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAnnonceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
