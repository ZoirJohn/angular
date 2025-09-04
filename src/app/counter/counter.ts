import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  count = signal(0);
  increment() {
    this.count.update((val) => ++val);
  }
  decrement() {
    this.count.update((val) => --val);
  }
}
