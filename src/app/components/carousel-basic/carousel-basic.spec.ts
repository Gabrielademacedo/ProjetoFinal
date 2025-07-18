import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBasic } from './carousel-basic';

describe('CarouselBasic', () => {
  let component: CarouselBasic;
  let fixture: ComponentFixture<CarouselBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
