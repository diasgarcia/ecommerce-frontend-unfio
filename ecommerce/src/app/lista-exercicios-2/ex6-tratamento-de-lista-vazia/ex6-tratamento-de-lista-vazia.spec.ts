import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6TratamentoDeListaVazia } from './ex6-tratamento-de-lista-vazia';

describe('Ex6TratamentoDeListaVazia', () => {
  let component: Ex6TratamentoDeListaVazia;
  let fixture: ComponentFixture<Ex6TratamentoDeListaVazia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex6TratamentoDeListaVazia],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex6TratamentoDeListaVazia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
