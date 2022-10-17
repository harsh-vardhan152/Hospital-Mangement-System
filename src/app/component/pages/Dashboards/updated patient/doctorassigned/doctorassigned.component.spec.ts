import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorassignedComponent } from './doctorassigned.component';

describe('DoctorassignedComponent', () => {
  let component: DoctorassignedComponent;
  let fixture: ComponentFixture<DoctorassignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorassignedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
