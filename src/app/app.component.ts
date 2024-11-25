import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IconBarComponent } from '../app/components/icon-bar/icon-bar.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { CookieWarningComponent } from '../app/components/cookie-warning/cookie-warning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    IconBarComponent,
    FooterComponent,
    CookieWarningComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
