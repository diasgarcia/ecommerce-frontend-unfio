import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10PromocaoEEstiloDinamico } from './ex10-promocao-e-estilo-dinamico';

describe('Ex10PromocaoEEstiloDinamico', () => {
  let component: Ex10PromocaoEEstiloDinamico;
  let fixture: ComponentFixture<Ex10PromocaoEEstiloDinamico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex10PromocaoEEstiloDinamico],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex10PromocaoEEstiloDinamico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
