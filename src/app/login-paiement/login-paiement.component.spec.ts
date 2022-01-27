import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPaiementComponent } from './login-paiement.component';

describe('LoginPaiementComponent', () => {
  let component: LoginPaiementComponent;
  let fixture: ComponentFixture<LoginPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
