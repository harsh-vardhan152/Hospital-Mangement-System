import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentLoginComponent } from './paitent-login.component';

describe('PaitentLoginComponent', () => {
  let component: PaitentLoginComponent;
  let fixture: ComponentFixture<PaitentLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaitentLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaitentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
