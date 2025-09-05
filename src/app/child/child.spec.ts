import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child } from './child';
import { Parent } from '../parent/parent';
import { By } from '@angular/platform-browser';

describe('Child', () => {
  let component: Parent;
  let fixture: ComponentFixture<Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child],
    }).compileComponents();

    fixture = TestBed.createComponent(Parent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have name Sarah', () => {
    const child = fixture.debugElement.query(By.directive(Child));
    const instance = child.componentInstance;

    expect(instance.name).toBe('Sarah');
  });

  it('should emit the name', () => {
    const child = fixture.debugElement.query(By.directive(Child));
    const button = child.nativeElement.querySelector('button');

    button.click();
    fixture.detectChanges();

    expect(component.result).toBe('Test');
  });
});
