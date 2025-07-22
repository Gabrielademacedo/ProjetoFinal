import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcesso } from './form-acesso';

describe('FormAcesso', () => {
  let component: FormAcesso;
  let fixture: ComponentFixture<FormAcesso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAcesso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAcesso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
