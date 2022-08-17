import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMobileComponent } from './cv-mobile.component';

describe('CvMobileComponent', () => {
  let component: CvMobileComponent;
  let fixture: ComponentFixture<CvMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
