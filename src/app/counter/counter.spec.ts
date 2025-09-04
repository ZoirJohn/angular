import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { By } from '@angular/platform-browser';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Counter],
    });

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const divs = fixture.debugElement.queryAll(By.css('div'));
    expect(divs.length).toBe(3);
  });
});
