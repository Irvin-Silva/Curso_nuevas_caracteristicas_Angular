import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskComponent } from "./dashboard/task/task.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo_nuevas_caracteristicas';
  isCheckedDefender = signal(false);
}
