import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8CadastroDeProduto } from './ex8-cadastro-de-produto';

describe('Ex8CadastroDeProduto', () => {
  let component: Ex8CadastroDeProduto;
  let fixture: ComponentFixture<Ex8CadastroDeProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex8CadastroDeProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex8CadastroDeProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
