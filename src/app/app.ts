import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Products } from './services/products';
import { IProduct } from './models/products';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatButtonModule, NgOptimizedImage, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  productsService = inject(Products);
  products = toSignal(this.productsService.getProducts(), { initialValue: [] });
}
