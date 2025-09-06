import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import jasmine from 'jasmine';

describe('Login', () => {
	let component: Login;
	let fixture: ComponentFixture<Login>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Login, ReactiveFormsModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(Login);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should have a login form', () => {
		expect(component.loginForm).toBeTruthy();
	});
	it('should have proper data', () => {
		expect(component.loginForm.contains('email')).toBeTruthy()
		expect(component.loginForm.contains('password')).toBeTruthy()
	})
	it('should be invalid form', () => {
		const email = component.loginForm.get('email')
		email?.setValue('test.com')
		expect(component.loginForm.valid).toBeFalse()
	})
	it('should have proper form data', () => {
		component.loginForm.setValue({
			email: 'test.com',
			password: 'al;skdjfalsdjf'
		})
		expect(component.loginForm.valid).toBeFalse()
	})
	it('should submit the login form', () => {
		spyOn(console, 'log')
		component.loginForm.setValue({
			email: 'test@.com',
			password: 'SayroqiBulbul'
		})

		const form = fixture.debugElement.query(By.css('form'))
		form.triggerEventHandler('ngSubmit', null)

		expect(console.log).toHaveBeenCalledWith('The form submitted:',{
			email: 'test@.com',
			password: 'SayroqiBulbul'
		})
	})
});
