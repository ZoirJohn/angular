import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Car } from "./car/car";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Car, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularTesting');
}
