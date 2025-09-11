import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { ICar } from '../models/car';

@Injectable({
	providedIn: 'root'
})
export class Car {
	private data = [{ name: 'Mitsubishi', model: 'Lancer Evolution 9', year: 2001, id: crypto.randomUUID() as string, preview: 'http://localhost:4200/assets/img/mitsubishi.webp' }]

	getCars() {
		return of(this.data).pipe()
	}

	addCar(car: ICar) {
		return of(car).pipe()
	}
	deleteCar(car: ICar) {
		return of(car).pipe()
	}
}
