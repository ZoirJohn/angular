import { Component, inject, signal } from '@angular/core';
import { Login } from "./login/login";
import { Store } from '@ngrx/store';
import { selectApp } from './app.selector';
import { decrement, increment, reset } from './app.actions';

@Component({
	selector: 'app-root',
	imports: [Login,],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	store = inject(Store)
	app = this.store.selectSignal(selectApp)
	increment() {
		this.store.dispatch(increment())
	}
	decrement() {
		this.store.dispatch(decrement())
	}
	reset() {
		this.store.dispatch(reset())
	}
}
