import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPaiementComponent } from './signup-paiement.component';

describe('SignupPaiementComponent', () => {
  let component: SignupPaiementComponent;
  let fixture: ComponentFixture<SignupPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
