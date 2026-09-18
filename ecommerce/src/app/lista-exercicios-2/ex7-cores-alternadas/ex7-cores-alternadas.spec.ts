import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7CoresAlternadas } from './ex7-cores-alternadas';

describe('Ex7CoresAlternadas', () => {
  let component: Ex7CoresAlternadas;
  let fixture: ComponentFixture<Ex7CoresAlternadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex7CoresAlternadas],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex7CoresAlternadas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
