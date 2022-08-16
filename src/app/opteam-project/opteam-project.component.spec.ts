import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpteamProjectComponent } from './opteam-project.component';

describe('OpteamProjectComponent', () => {
  let component: OpteamProjectComponent;
  let fixture: ComponentFixture<OpteamProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpteamProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpteamProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
