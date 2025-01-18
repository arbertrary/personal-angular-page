import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
