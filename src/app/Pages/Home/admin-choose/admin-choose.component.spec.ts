import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChooseComponent } from './admin-choose.component';

describe('AdminChooseComponent', () => {
  let component: AdminChooseComponent;
  let fixture: ComponentFixture<AdminChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
