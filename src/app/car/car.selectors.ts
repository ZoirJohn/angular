import { createFeatureSelector } from "@ngrx/store";
import { Car } from "./car";

export const getCars = createFeatureSelector<Car[]>('cars')