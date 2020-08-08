import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  public getListProduct(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${baseUrl}/product`);
  }
  public getListProductById(id: string): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${baseUrl}/product/${id}`);
  }
  public createProduct(pro: Product): Observable<any>{
    return this.http.post(`${baseUrl}/product`, pro);
  }
  public updateProduct(pro: Product): Observable<any>{
    return this.http.post(`${baseUrl}/product/${pro.id}`, pro);
  }
  public deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/product/${id}`);
  }
}
