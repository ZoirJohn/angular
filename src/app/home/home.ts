import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Products } from '../services/products';
import { toSignal } from '@angular/core/rxjs-interop';
import { IProduct } from '../models/products';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  productsService = inject(Products);
  products = toSignal(this.productsService.getProducts(), { initialValue: [] });
  sidenavOpen = false;
  addProduct(product: IProduct) {
    this.productsService.addProduct(product).subscribe({
      next: (data) => {
        console.log(data);
        console.log(this.products());
      },
      error: (error) => console.error(error),
    });
  }
}
