import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13ListaDeTarefas } from './ex13-lista-de-tarefas';

describe('Ex13ListaDeTarefas', () => {
  let component: Ex13ListaDeTarefas;
  let fixture: ComponentFixture<Ex13ListaDeTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex13ListaDeTarefas],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex13ListaDeTarefas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
