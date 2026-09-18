import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2SituacaoDoUsuario } from './ex2-situacao-do-usuario';

describe('Ex2SituacaoDoUsuario', () => {
  let component: Ex2SituacaoDoUsuario;
  let fixture: ComponentFixture<Ex2SituacaoDoUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex2SituacaoDoUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex2SituacaoDoUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
