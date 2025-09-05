import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
  standalone: true,
})
export class Parent {
  parentName = 'Sarah';
  result = '';
  show(message: string) {
    this.result = message;
  }
}
