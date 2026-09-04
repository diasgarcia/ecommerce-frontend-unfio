import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5ContadorDeCurtidas } from './ex5-contador-de-curtidas';

describe('Ex5ContadorDeCurtidas', () => {
  let component: Ex5ContadorDeCurtidas;
  let fixture: ComponentFixture<Ex5ContadorDeCurtidas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex5ContadorDeCurtidas],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex5ContadorDeCurtidas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
