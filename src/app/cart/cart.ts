import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Products } from '../services/products';

@Component({
  selector: 'app-cart',
  imports: [NgOptimizedImage, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartService = inject(Products);
  cart = toSignal(this.cartService.getCart(), { initialValue: [] });
  deleteProductFromCart(id: string) {
    this.cartService.deleteProductFromCart(id).subscribe({
      next: (data) => {
        this.cart = toSignal(this.cartService.getCart(), { initialValue: [] });
      },
      error: (error) => console.error(error),
    });
  }
}
