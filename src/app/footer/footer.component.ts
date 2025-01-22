import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { trigger, query, stagger, animate, style, transition } from '@angular/animations'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faAngular, faGoogleScholar, faOrcid } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    trigger("animateFooter", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(100%)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faAngular = faAngular;
  faGoogleScholar = faGoogleScholar;
  faOrcid = faOrcid;
  faUp = faCircleArrowUp;

  leftBarVisible: boolean = true;
  pageYPosition: number = 0;

  constructor(
  ) { }

  ngOnInit() {
    this.checkScreenSize(); // Initial check
  }


  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event: any) {
    this.pageYPosition = window.scrollY;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }
  private checkScreenSize() {
    const width = window.innerWidth;
    this.leftBarVisible = width > 1200; // Adjust the width threshold as needed
  }


}
