import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
