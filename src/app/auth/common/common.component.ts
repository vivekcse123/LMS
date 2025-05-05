import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})
export class CommonComponent {

}
