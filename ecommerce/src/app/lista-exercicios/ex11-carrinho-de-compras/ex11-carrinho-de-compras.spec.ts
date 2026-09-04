import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex11CarrinhoDeCompras } from './ex11-carrinho-de-compras';

describe('Ex11CarrinhoDeCompras', () => {
  let component: Ex11CarrinhoDeCompras;
  let fixture: ComponentFixture<Ex11CarrinhoDeCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex11CarrinhoDeCompras],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex11CarrinhoDeCompras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
