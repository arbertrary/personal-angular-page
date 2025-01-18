import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectsComponent } from "./projects/projects.component";
import { PublicationsComponent } from "./publications/publications.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, AboutComponent, ExperienceComponent, ProjectsComponent, PublicationsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
