import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInicial } from './header-inicial';

describe('HeaderInicial', () => {
  let component: HeaderInicial;
  let fixture: ComponentFixture<HeaderInicial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderInicial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInicial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
