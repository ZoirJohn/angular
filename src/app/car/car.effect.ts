import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Car } from "../services/car";
import { addCar, addCarError, addCarSuccess, deleteCar, deleteCarError, deleteCarSuccess, loadCars, loadCarsError, loadCarsSuccess } from "./car.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CarEffect {
	private action$ = inject(Actions)
	private carService = inject(Car)
	loadCars$ = createEffect(() => this.action$.pipe(
		ofType(loadCars),
		switchMap(() => this.carService.getCars().pipe(
			map((cars) => loadCarsSuccess({ cars })),
			catchError(error => of(loadCarsError({ error })))
		))
	))

	addCar$ = createEffect(() => this.action$.pipe(
		ofType(addCar),
		switchMap((action) => this.carService.addCar(action.car).pipe(
			map((car) => addCarSuccess({ car })),
			catchError(error => of(addCarError({ error })))
		))
	))

	deleteCar$ = createEffect(() => this.action$.pipe(
		ofType(deleteCar),
		switchMap((action) => this.carService.deleteCar(action.car).pipe(
			map((car) => deleteCarSuccess({ car })),
			catchError(error => of(deleteCarError({ error })))
		))
	))
}