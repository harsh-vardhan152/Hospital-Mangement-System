import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePagePComponent } from './update-page-p.component';

describe('UpdatePagePComponent', () => {
  let component: UpdatePagePComponent;
  let fixture: ComponentFixture<UpdatePagePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePagePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePagePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
