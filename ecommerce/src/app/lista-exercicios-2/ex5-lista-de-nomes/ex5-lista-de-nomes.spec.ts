import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5ListaDeNomes } from './ex5-lista-de-nomes';

describe('Ex5ListaDeNomes', () => {
  let component: Ex5ListaDeNomes;
  let fixture: ComponentFixture<Ex5ListaDeNomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex5ListaDeNomes],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex5ListaDeNomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
