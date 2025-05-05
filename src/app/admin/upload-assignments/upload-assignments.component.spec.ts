import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAssignmentsComponent } from './upload-assignments.component';

describe('UploadAssignmentsComponent', () => {
  let component: UploadAssignmentsComponent;
  let fixture: ComponentFixture<UploadAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadAssignmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
