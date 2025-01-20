import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEnvelopeOpenText, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  faLinkedin = faLinkedin;
  faMail = faEnvelopeOpenText;
  faUp = faCircleArrowUp;

  scroll(el: string) {
    console.log("scroll")
    if (document.getElementById(el)) {
      console.log("getElbyID")
      document.getElementById(el)!.scrollIntoView({ behavior: 'smooth' });
    } else {
      // this.router.navigate(['/home']).then(()=> document.getElementById(el).scrollIntoView({behavior: 'smooth'}) );
    }

  }
}
