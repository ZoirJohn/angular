import { createReducer, on } from '@ngrx/store';
import { addCar, addCarError, addCarSuccess, deleteCar, deleteCarError, deleteCarSuccess, loadCars, loadCarsError, loadCarsSuccess } from './car.actions';
import { ICarState } from '../models/car';

export const initialState: ICarState = {
	cars: [],
	loading: false,
	error: null
};

export const carReducer = createReducer(
	initialState,
	on(loadCars, (state) => ({ ...state, loading: true })),
	on(loadCarsSuccess, (state, action) => ({ ...state, loading: false, cars: action.cars })),
	on(loadCarsError, (state, action) => ({ ...state, error: action.error })),

	on(addCar, (state) => ({ ...state, loading: true, })),
	on(addCarSuccess, (state, action) => ({ ...state, loading: false, cars: [...state.cars, action.car] })),
	on(addCarError, (state, action) => ({ ...state, error: action.error })),

	on(deleteCar, (state) => ({ ...state, loading: true })),
	on(deleteCarSuccess, (state, action) => ({ ...state, loading: false, cars: state.cars.filter(car => car.id !== action.car.id) })),
	on(deleteCarError, (state, action) => ({ ...state, error: action.error })),
);