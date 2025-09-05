import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Parent } from './parent/parent';

@Component({
	selector: 'app-root',
	imports: [Counter, Parent],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	protected readonly title = signal('This is testing');
}
