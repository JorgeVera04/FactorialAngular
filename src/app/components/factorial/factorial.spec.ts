import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialComponent } from './factorial';

describe('Factorial', () => {
  let component: FactorialComponent;
  let fixture: ComponentFixture<FactorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactorialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FactorialComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
