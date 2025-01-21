/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideAnimationsAsync(), provideRouter([], withInMemoryScrolling({
    anchorScrolling: 'enabled',          // Enable scrolling to fragments
    scrollPositionRestoration: 'enabled' // Restore scroll position on navigation
  }))]
}).catch((err) =>
  console.error(err),
);
