import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';


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




}
