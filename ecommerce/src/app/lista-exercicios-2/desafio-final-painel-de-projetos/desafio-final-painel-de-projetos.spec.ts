import { CommonModule, NgClass } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DesafioFinalPainelDeProjetos } from './desafio-final-painel-de-projetos';

describe('DesafioFinalPainelDeProjetos', () => {
  let component: DesafioFinalPainelDeProjetos;
  let fixture: ComponentFixture<DesafioFinalPainelDeProjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioFinalPainelDeProjetos],
      imports: [CommonModule, FormsModule, NgClass],
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioFinalPainelDeProjetos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
