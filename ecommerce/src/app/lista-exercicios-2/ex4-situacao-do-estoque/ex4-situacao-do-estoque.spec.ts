import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4SituacaoDoEstoque } from './ex4-situacao-do-estoque';

describe('Ex4SituacaoDoEstoque', () => {
  let component: Ex4SituacaoDoEstoque;
  let fixture: ComponentFixture<Ex4SituacaoDoEstoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4SituacaoDoEstoque],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex4SituacaoDoEstoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
