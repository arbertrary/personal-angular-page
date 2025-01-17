import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent],
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
