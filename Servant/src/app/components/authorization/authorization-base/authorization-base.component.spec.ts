import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationBaseComponent } from './authorization-base.component';

describe('AuthorizationBaseComponent', () => {
  let component: AuthorizationBaseComponent;
  let fixture: ComponentFixture<AuthorizationBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
