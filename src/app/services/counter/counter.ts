import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  private count = 0;
  getCount() {
    return this.count;
  }
}
