import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10LoginSimulado } from './ex10-login-simulado';

describe('Ex10LoginSimulado', () => {
  let component: Ex10LoginSimulado;
  let fixture: ComponentFixture<Ex10LoginSimulado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex10LoginSimulado],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex10LoginSimulado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
