import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsreadyProjectComponent } from './opsready-project.component';

describe('OpsreadyProjectComponent', () => {
  let component: OpsreadyProjectComponent;
  let fixture: ComponentFixture<OpsreadyProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsreadyProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsreadyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
