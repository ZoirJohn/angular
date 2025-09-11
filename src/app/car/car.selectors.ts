import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICar, ICarState } from "../models/car";

export const selectCarsState = createFeatureSelector<ICarState>('cars')

export const selectCars = createSelector(selectCarsState, (state) => state.cars)
export const selectCarsLoading = createSelector(selectCarsState, (state) => state.loading)
export const selectCarsError = createSelector(selectCarsState, (state) => state.error)