import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7NomeEmTempoReal } from './ex7-nome-em-tempo-real';

describe('Ex7NomeEmTempoReal', () => {
  let component: Ex7NomeEmTempoReal;
  let fixture: ComponentFixture<Ex7NomeEmTempoReal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex7NomeEmTempoReal],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex7NomeEmTempoReal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
