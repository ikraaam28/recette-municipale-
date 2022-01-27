import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimobComponent } from './addimob.component';

describe('AddimobComponent', () => {
  let component: AddimobComponent;
  let fixture: ComponentFixture<AddimobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddimobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
