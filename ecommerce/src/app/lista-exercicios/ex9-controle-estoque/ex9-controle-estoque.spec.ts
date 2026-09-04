import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex9ControleEstoque } from './ex9-controle-estoque';

describe('Ex9ControleEstoque', () => {
  let component: Ex9ControleEstoque;
  let fixture: ComponentFixture<Ex9ControleEstoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex9ControleEstoque],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex9ControleEstoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
