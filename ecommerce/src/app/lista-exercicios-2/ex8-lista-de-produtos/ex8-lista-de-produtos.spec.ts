import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8ListaDeProdutos } from './ex8-lista-de-produtos';

describe('Ex8ListaDeProdutos', () => {
  let component: Ex8ListaDeProdutos;
  let fixture: ComponentFixture<Ex8ListaDeProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex8ListaDeProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex8ListaDeProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
