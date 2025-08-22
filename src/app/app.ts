import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Products } from './services/products';
import { IProduct } from './models/products';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatButtonModule, NgOptimizedImage, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  productsService = inject(Products);
  products = signal<IProduct[]>([]);
  constructor() {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (error) => console.error(error),
    });
  }
}
