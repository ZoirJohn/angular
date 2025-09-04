import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private students = ['Shawn', 'John'];
  getUsers() {
    return of(this.students);
  }
  addUser(username: string) {
    this.students = [...this.students, username];
  }
}
