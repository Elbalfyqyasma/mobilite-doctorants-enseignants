import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionScientifiqueService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getProductionScientifique(id: number): Observable<any> {
    const url = `${this.apiUrl}/production-scientifique/${id}`;
    return this.http.get(url);
  }

  createProductionScientifique(data: any): Observable<any> {
    const url = `${this.apiUrl}/add-production-scientifique`;
    return this.http.post(url, data);
  }

  updateProductionScientifique(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/production-scientifique/${id}`;
    return this.http.put(url, data);
  }

  searchByTitre(titre: string): Observable<any> {
    const url = `${this.apiUrl}/production-scientifiques/search`;
    return this.http.get(url, { params: { titre } });
  }

  getAllProductionScientifiques(): Observable<any> {
    const url = `${this.apiUrl}/get-production-scientifiques`;
    return this.http.get(url);
  }

  searchByUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/production-scientifiques/search-by-user`;
    return this.http.get(url, { params: { user_id: userId.toString() } });
  }

  deleteProductionScientifique(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete-production-scientifique/${id}`;
    return this.http.delete(url);
  }
}
