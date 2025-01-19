import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  faLinkedin = faLinkedin;
  faMail = faEnvelopeOpenText;


}
