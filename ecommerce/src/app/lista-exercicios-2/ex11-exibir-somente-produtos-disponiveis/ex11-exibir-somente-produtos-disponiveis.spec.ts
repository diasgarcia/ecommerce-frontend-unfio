import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Ex11ExibirSomenteProdutosDisponiveis } from './ex11-exibir-somente-produtos-disponiveis';

describe('Ex11ExibirSomenteProdutosDisponiveis', () => {
  let component: Ex11ExibirSomenteProdutosDisponiveis;
  let fixture: ComponentFixture<Ex11ExibirSomenteProdutosDisponiveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex11ExibirSomenteProdutosDisponiveis],
      imports: [CommonModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex11ExibirSomenteProdutosDisponiveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
