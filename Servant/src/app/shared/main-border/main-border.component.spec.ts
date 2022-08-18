import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBorderComponent } from './main-border.component';

describe('MainBorderComponent', () => {
  let component: MainBorderComponent;
  let fixture: ComponentFixture<MainBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
