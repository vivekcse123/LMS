import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myLMS';
}
