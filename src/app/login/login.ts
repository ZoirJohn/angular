import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	imports: [ReactiveFormsModule],
	templateUrl: './login.html',
	styleUrl: './login.scss'
})
export class Login {
	loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)])
	})
	submit() {
		console.log('The form submitted:', this.loginForm.value);
	}
}
