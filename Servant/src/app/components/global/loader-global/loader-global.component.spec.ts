import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderGlobalComponent } from './loader-global.component';

describe('LoaderGlobalComponent', () => {
  let component: LoaderGlobalComponent;
  let fixture: ComponentFixture<LoaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
