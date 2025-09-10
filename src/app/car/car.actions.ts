import { createAction, props } from '@ngrx/store';
import { ICar } from '../models/car';

export const addCar = createAction('[Car] Add car', props<{ car: ICar }>());