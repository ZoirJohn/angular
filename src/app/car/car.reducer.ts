import { createReducer, on } from '@ngrx/store';
import { addCar } from './car.actions';
import { ICar } from '../models/car';

export const initialState: ICar[] = [];

export const carReducer = createReducer(
	initialState,
	on(addCar, (state, action) => [...state, action.car]),
);