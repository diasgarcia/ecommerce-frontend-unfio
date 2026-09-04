import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioFinalMatriculaEmCurso } from './desafio-final-matricula-em-curso';

describe('DesafioFinalMatriculaEmCurso', () => {
  let component: DesafioFinalMatriculaEmCurso;
  let fixture: ComponentFixture<DesafioFinalMatriculaEmCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioFinalMatriculaEmCurso],
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioFinalMatriculaEmCurso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
