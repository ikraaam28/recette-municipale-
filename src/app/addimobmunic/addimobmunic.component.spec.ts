import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimobmunicComponent } from './addimobmunic.component';

describe('AddimobmunicComponent', () => {
  let component: AddimobmunicComponent;
  let fixture: ComponentFixture<AddimobmunicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddimobmunicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimobmunicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
