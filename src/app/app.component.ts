import { Constructor } from './../../node_modules/@angular/cdk/schematics/update-tool/migration.d';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskComponent } from "./dashboard/task/task.component";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule, MatInputModule, MatFormFieldModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo_nuevas_caracteristicas';
  isCheckedDefender = signal(false);

  fruit: string = 'Apple';
  fruits: string[] = ['Apple', 'Orange', 'Banana', 'Mango'];

  isApple: boolean = true;

  count = signal(0);

  constructor(){
    setInterval(() => {
      this.count.set(this.count() + 1);
    }, 1000);
  }

  name = signal('Irvin Silva')

  updateName(name: string){

    this.name.set(name);

  }
  toggleFruit(){
    this.isApple = !this.isApple;
  }
}
