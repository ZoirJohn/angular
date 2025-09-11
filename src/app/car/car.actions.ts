import { createAction, props } from '@ngrx/store';
import { ICar } from '../models/car';

export const loadCars = createAction('[Car] Load cars');
export const loadCarsSuccess = createAction('[Car] Load cars success', props<{ cars: ICar[] }>());
export const loadCarsError = createAction('[Car] Load cars error', props<{ error: any }>());

export const addCar = createAction('[Car] Add car', props<{ car: ICar }>());
export const addCarSuccess = createAction('[Car] Add car success', props<{ car: ICar }>());
export const addCarError = createAction('[Car] Add car error', props<{ error: any }>());

export const deleteCar = createAction('[Car] DeleteCar car', props<{ car: ICar }>());
export const deleteCarSuccess = createAction('[Car] DeleteCar car', props<{ car: ICar }>());
export const deleteCarError = createAction('[Car] DeleteCar car', props<{ error: any }>());