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

  it('should create exactly three divs', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
  });

  it('should be 0', () => {
    const parent = fixture.nativeElement;
    const child = parent.querySelector('div');
    expect(child.innerText).toBe('0');
  });

  it('should increase by 1 when clicked on increment button', () => {
    const parent = fixture.nativeElement;
    const button = parent.querySelector('#incrementBtn');
    const box = parent.querySelector('div');
    button.click();
    fixture.detectChanges();
    expect(box.innerText).toBe('1');
  });

  it('should decrease by 1 when clicked on decrement button', () => {
    const parent = fixture.nativeElement;
    const button = parent.querySelector('#decrementBtn');
    const box = parent.querySelector('div');
    button.click();
    fixture.detectChanges();
    expect(box.innerText).toBe('-1');
  });
});
