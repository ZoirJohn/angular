import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../models/products';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Products {
  client = inject(HttpClient)
  getProducts() {
    return this.client.get<IProduct[]>(environment.baseUrl)
  }
}
