import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentSideBarComponent } from '../../shared/student-side-bar/student-side-bar.component';

@Component({
  selector: 'app-student-dashbaord',
  standalone: true,
  imports: [RouterOutlet, StudentSideBarComponent],
  templateUrl: './student-dashbaord.component.html',
  styleUrl: './student-dashbaord.component.css'
})
export class StudentDashbaordComponent {

}
