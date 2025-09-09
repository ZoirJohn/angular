import { createAction } from '@ngrx/store';

export const increment = createAction('App Increment');
export const decrement = createAction('App Decrement');
export const reset = createAction('App Reset');