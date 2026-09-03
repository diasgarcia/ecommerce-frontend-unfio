import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1ApresentacaoDoAluno } from './ex1-apresentacao-do-aluno';

describe('Ex1ApresentacaoDoAluno', () => {
  let component: Ex1ApresentacaoDoAluno;
  let fixture: ComponentFixture<Ex1ApresentacaoDoAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex1ApresentacaoDoAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1ApresentacaoDoAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
