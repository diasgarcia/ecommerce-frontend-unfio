import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NomeEmTempoReal } from './nome-em-tempo-real';

describe('NomeEmTempoReal', () => {
  let component: NomeEmTempoReal;
  let fixture: ComponentFixture<NomeEmTempoReal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NomeEmTempoReal],
    }).compileComponents();

    fixture = TestBed.createComponent(NomeEmTempoReal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
