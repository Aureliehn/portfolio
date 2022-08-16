import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetcDetailComponent } from './projetc-detail.component';

describe('ProjetcDetailComponent', () => {
  let component: ProjetcDetailComponent;
  let fixture: ComponentFixture<ProjetcDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetcDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
