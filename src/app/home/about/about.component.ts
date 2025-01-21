import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDragon, faFlask, faGuitar, faMugHot, faScroll, faSeedling } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faAngular = faAngular;
  faPython = faPython;
  faFlask = faFlask;
  faJs = faJs;
  faCoffee = faMugHot;
  faProgrammer = faCode;
  faGuitar = faGuitar;
  faDragon = faDragon;
  faScroll = faScroll;
  faFood = faSeedling;

  brands: any = [{ name: "Angular", path: "assets/logos/Angular.svg" }, { name: "CSS", path: "assets/logos/CSS3.svg" }, { name: "Flask", path: "assets/logos/Flask.svg" }, { name: "Git", path: "assets/logos/Git.svg" }, { name: "Haskell", path: "assets/logos/Haskell.svg" }, { name: "Python", path: "assets/logos/Python.svg" }, { name: "TypeScript", path: "assets/logos/TypeScript.svg" }, { name: "Unreal Engine", path: "assets/logos/UnrealEngine.svg" }]
}
