import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  faGithub = faGithub;
  faGitlab = faGitlab;
  showAdditionalContent = false;

  constructor(private route: ActivatedRoute) {
    // Listen to fragment changes
    this.route.fragment.subscribe((fragment) => {
      this.showAdditionalContent = fragment === 'test-fragment';
    });
  }
}
