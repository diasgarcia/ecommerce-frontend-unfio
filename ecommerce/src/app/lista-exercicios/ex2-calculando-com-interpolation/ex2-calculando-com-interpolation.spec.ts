import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2CalculandoComInterpolation } from './ex2-calculando-com-interpolation';

describe('Ex2CalculandoComInterpolation', () => {
  let component: Ex2CalculandoComInterpolation;
  let fixture: ComponentFixture<Ex2CalculandoComInterpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex2CalculandoComInterpolation],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex2CalculandoComInterpolation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
