import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-student-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './student-side-bar.component.html',
  styleUrl: './student-side-bar.component.css'
})
export class StudentSideBarComponent {

}
