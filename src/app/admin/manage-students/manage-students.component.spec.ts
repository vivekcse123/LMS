import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentsComponent } from './manage-students.component';

describe('ManageStudentsComponent', () => {
  let component: ManageStudentsComponent;
  let fixture: ComponentFixture<ManageStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
