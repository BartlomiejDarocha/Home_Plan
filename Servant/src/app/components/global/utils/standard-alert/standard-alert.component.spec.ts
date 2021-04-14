import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAlertComponent } from './standard-alert.component';

describe('StandardAlertComponent', () => {
  let component: StandardAlertComponent;
  let fixture: ComponentFixture<StandardAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
