import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

import { ParticlesConfig } from './particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent],
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'default';
  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () { });
  }
}
