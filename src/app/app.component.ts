import { Component } from '@angular/core';
import { obama } from './mock/collegues.mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'collegues-front';

  collegue = obama; 

}