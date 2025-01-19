import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { bibtexEntries } from './bibtex-entries';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publications',
  imports: [MatExpansionModule, ClipboardModule, MatIconModule, MatSnackBarModule, CommonModule],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {

  entries = bibtexEntries;

  private _snackBar = inject(MatSnackBar);
  openSnackBar() {
    this._snackBar.open("Copied to Clipboard", "Close", { duration: 1000 });
  }
}
