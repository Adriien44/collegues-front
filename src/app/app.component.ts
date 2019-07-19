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

/* 
accueil collègue recherche + affichage

gallerie : voir tous les collègues // photo affichée on clique dessus et les infos du collègue s'affiche

page à propos : yolo

*/