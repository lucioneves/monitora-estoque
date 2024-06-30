import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/products';
  private http!: HttpClient;

  constructor(private injector: Injector) {}

  private getHttpClient(): HttpClient {
    if (!this.http) {
      this.http = this.injector.get(HttpClient);
    }
    return this.http;
  }

  addProduct(product: Product): Observable<Product> {
    return this.getHttpClient().post<Product>(this.apiUrl, product);
  }

  getProducts(): Observable<Product[]> {
    return this.getHttpClient().get<Product[]>(this.apiUrl);
  }
}
