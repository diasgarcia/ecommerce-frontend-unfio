import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Ex12CadastroSimplificado } from './ex12-cadastro-simplificado';

describe('Ex12CadastroSimplificado', () => {
  let component: Ex12CadastroSimplificado;
  let fixture: ComponentFixture<Ex12CadastroSimplificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex12CadastroSimplificado],
      imports: [CommonModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex12CadastroSimplificado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
