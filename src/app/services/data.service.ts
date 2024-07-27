import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private apiUrl = 'http://localhost:9020/api/Produit'; // Adjust URL according to your backend API
  



  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDataBySAP(sapValue: string): Observable<any[]> {
    const url = `${this.apiUrl}?sap=${sapValue}`;
    return this.http.get<any[]>(url);
    
  }

  addProduct(productData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, productData);
  }
  deleteData(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
 /* fetchProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
*/
}
