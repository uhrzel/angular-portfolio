import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutUsComponent } from './modules/about-us/about-us/about-us.component';
import { HomeComponent } from './home/home.component';
/* import { HomeComponent } from './home/home.component'; */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shop';
}
