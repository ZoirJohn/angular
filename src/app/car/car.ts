import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCar } from './car.actions';
import { ICar } from '../models/car';
import { getCars } from './car.selectors';

@Component({
	selector: 'app-car',
	imports: [NgOptimizedImage, ReactiveFormsModule],
	templateUrl: './car.html',
	styleUrl: './car.scss'
})
export class Car {
	store = inject(Store)
	cars = this.store.selectSignal(getCars)
	carForm = new FormGroup({
		name: new FormControl('', Validators.required),
		model: new FormControl('', Validators.required),
		year: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(parseInt(new Date().toLocaleString(['en'], { year: 'numeric' })))]),
	})
	submit() {
		const madeCar = { ...this.carForm.value, id: crypto.randomUUID() } as ICar
		this.store.dispatch(addCar({ car: madeCar }))
		this.carForm.reset()
	}
}
