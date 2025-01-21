import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDragon, faFlask, faGuitar, faMugHot, faScroll, faSeedling } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
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
}
