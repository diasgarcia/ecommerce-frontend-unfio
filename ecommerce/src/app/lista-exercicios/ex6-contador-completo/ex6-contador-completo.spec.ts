import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6ContadorCompleto } from './ex6-contador-completo';

describe('Ex6ContadorCompleto', () => {
  let component: Ex6ContadorCompleto;
  let fixture: ComponentFixture<Ex6ContadorCompleto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex6ContadorCompleto],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex6ContadorCompleto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
