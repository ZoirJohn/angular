import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Parent } from './parent/parent';
import { Login } from "./login/login";

@Component({
	selector: 'app-root',
	imports: [Counter, Parent, Login],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	protected readonly title = signal('This is testing');
}
