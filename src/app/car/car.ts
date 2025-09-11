import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCar, deleteCar, loadCars } from './car.actions';
import { ICar } from '../models/car';
import { selectCars, selectCarsError, selectCarsLoading } from './car.selectors';

@Component({
	selector: 'app-car',
	imports: [NgOptimizedImage, ReactiveFormsModule],
	templateUrl: './car.html',
	styleUrl: './car.scss'
})
export class Car implements OnInit {
	private minimum = 2000
	private store = inject(Store)

	readonly cars = this.store.selectSignal(selectCars)
	readonly loading = this.store.selectSignal(selectCarsLoading)
	readonly error = this.store.selectSignal(selectCarsError)

	carForm = new FormGroup({
		name: new FormControl('', Validators.required),
		model: new FormControl('', Validators.required),
		year: new FormControl(this.minimum, [Validators.required, Validators.min(this.minimum), Validators.max(parseInt(new Date().toLocaleString(['en'], { year: 'numeric' })))]),
		preview: new FormControl('', Validators.required,),
	})
	submit() {
		const car = { ...this.carForm.value, id: crypto.randomUUID() } as ICar
		this.store.dispatch(addCar({ car }))
		this.carForm.reset()
	}
	deleteCar(car: ICar) {
		this.store.dispatch(deleteCar({ car }))
	}
	ngOnInit() {
		this.store.dispatch(loadCars())
	}
}
