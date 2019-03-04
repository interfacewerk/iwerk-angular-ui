import { Component } from '@angular/core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  faHandshake = faHandshake;
}
