import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1ExibicaoDeMensagem } from './ex1-exibicao-de-mensagem';

describe('Ex1ExibicaoDeMensagem', () => {
  let component: Ex1ExibicaoDeMensagem;
  let fixture: ComponentFixture<Ex1ExibicaoDeMensagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex1ExibicaoDeMensagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1ExibicaoDeMensagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
