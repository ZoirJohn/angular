import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users } from './users';
import { Counter } from '../../counter/counter';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Users', () => {
	let service: Users;
	let fixture: ComponentFixture<Counter>;
	let component: Counter;
	let httpTesting: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
		service = TestBed.inject(Users);
		httpTesting = TestBed.inject(HttpTestingController);
		fixture = TestBed.createComponent(Counter);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should have 2 students', () => {
		service.getUsers().subscribe((students) => {
			expect(students.length).toBe(2);
		});
	});
	it('should have 3 students after adding one', () => {
		service.addUser('Freddy');
		service.getUsers().subscribe((students) => {
			expect(students.length).toBe(3);
		});
	});
	it('shoud return proper data', () => {
		expect(httpTesting.expectOne('/api/students', 'Request to load students').request.method).toBe(
			'GET'
		);
	});
});
