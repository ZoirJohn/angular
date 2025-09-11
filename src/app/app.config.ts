import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { carReducer } from './car/car.reducer';
import { provideEffects } from '@ngrx/effects';
import { CarEffect } from './car/car.effect';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideStore({ cars: carReducer }),
		provideEffects([CarEffect])
	]
};
