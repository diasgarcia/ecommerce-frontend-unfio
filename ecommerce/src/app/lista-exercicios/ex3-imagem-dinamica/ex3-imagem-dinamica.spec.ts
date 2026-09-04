import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3ImagemDinamica } from './ex3-imagem-dinamica';

describe('Ex3ImagemDinamica', () => {
  let component: Ex3ImagemDinamica;
  let fixture: ComponentFixture<Ex3ImagemDinamica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex3ImagemDinamica],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex3ImagemDinamica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
