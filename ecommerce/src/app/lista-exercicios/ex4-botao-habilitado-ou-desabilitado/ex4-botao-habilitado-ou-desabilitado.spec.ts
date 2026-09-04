import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4BotaoHabilitadoOuDesabilitado } from './ex4-botao-habilitado-ou-desabilitado';

describe('Ex4BotaoHabilitadoOuDesabilitado', () => {
  let component: Ex4BotaoHabilitadoOuDesabilitado;
  let fixture: ComponentFixture<Ex4BotaoHabilitadoOuDesabilitado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4BotaoHabilitadoOuDesabilitado],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex4BotaoHabilitadoOuDesabilitado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
