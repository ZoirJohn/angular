import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users } from './users';
import { Counter } from '../../counter/counter';

describe('Users', () => {
  let service: Users;
  let fixture: ComponentFixture<Counter>;
  let component: Counter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users);
    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have 2 students', () => {
    service.getUsers().subscribe((students) => {
      expect(students.length).toBe(2);
    });
  });
  it('should do something', () => {
    service.addUser('Freddy');
    service.getUsers().subscribe((students) => {
      expect(students.length).toBe(2);
    });
  });
});
