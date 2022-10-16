import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentSingupComponent } from './paitent-singup.component';

describe('PaitentSingupComponent', () => {
  let component: PaitentSingupComponent;
  let fixture: ComponentFixture<PaitentSingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaitentSingupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaitentSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
