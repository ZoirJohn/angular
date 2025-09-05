import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  standalone: true,
})
export class Child {
  @Input() name = '';
  @Output() sendName = new EventEmitter<string>();

  show(message: string) {
    this.sendName.emit(message);
  }
}
