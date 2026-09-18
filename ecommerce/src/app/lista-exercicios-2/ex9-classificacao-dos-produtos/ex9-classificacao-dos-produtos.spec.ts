import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex9ClassificacaoDosProdutos } from './ex9-classificacao-dos-produtos';

describe('Ex9ClassificacaoDosProdutos', () => {
  let component: Ex9ClassificacaoDosProdutos;
  let fixture: ComponentFixture<Ex9ClassificacaoDosProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex9ClassificacaoDosProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex9ClassificacaoDosProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
