import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logar } from './logar';

describe('Logar', () => {
  let component: Logar;
  let fixture: ComponentFixture<Logar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logar],
    }).compileComponents();

    fixture = TestBed.createComponent(Logar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
