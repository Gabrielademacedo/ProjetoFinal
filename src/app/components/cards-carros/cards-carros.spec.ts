import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarros } from './cards-carros';

describe('CardsCarros', () => {
  let component: CardsCarros;
  let fixture: ComponentFixture<CardsCarros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCarros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCarros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
