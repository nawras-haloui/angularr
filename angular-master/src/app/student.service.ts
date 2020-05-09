import { Injectable } from '@angular/core';

import { HttpClient ,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private baseUrl = 'http://localhost:8080/register';

  constructor(private http: HttpClient) { }

  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  updatetudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletetudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
