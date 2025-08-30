import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../models/products';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Products {
  client = inject(HttpClient);
  getProducts(): Observable<IProduct[]> {
    return this.client.get<IProduct[]>(`${environment.baseUrl}/products`);
  }
  addProduct(product: IProduct): Observable<IProduct[]> {
    return this.client.post<IProduct[]>(`${environment.baseUrl}/cart`, product);
  }
  getCart(): Observable<IProduct[]> {
    return this.client.get<IProduct[]>(`${environment.baseUrl}/cart`);
  }
  deleteProductFromCart(id:string){
    return this.client.delete<IProduct[]>(`${environment.baseUrl}/cart/${id}`);
  }
}
