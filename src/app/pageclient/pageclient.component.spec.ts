import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageclientComponent } from './pageclient.component';

describe('PageclientComponent', () => {
  let component: PageclientComponent;
  let fixture: ComponentFixture<PageclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
