import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class Users {
	private students = ['Shawn', 'John'];
	constructor(private client: HttpClient) { }

	getUsers() {
		return of(this.students);
	}
	addUser(username: string) {
		this.students = [...this.students, username];
	}
	getData() {
		return this.client.get('/api/students');
	}
}
