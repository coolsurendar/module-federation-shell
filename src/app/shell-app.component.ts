import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './shell-app.component.html',
  styleUrl: './shell-app.component.scss'
})
export class ShellAppComponent {
  title = 'shell-app';
}
