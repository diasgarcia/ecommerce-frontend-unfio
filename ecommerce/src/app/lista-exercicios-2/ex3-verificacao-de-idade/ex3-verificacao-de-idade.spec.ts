import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3VerificacaoDeIdade } from './ex3-verificacao-de-idade';

describe('Ex3VerificacaoDeIdade', () => {
  let component: Ex3VerificacaoDeIdade;
  let fixture: ComponentFixture<Ex3VerificacaoDeIdade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex3VerificacaoDeIdade],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex3VerificacaoDeIdade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
