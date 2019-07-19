import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { GallerieCollegue } from '../models/GallerieCollegue';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  constructor(private _gallerie: DataService) { }

  listePhoto: GallerieCollegue[];
  erreurListe: boolean = false;
  erreur:boolean = false; 
  msgError:string; 

  ngOnInit() {
    return this._gallerie.getPhoto().subscribe(
      listeCollegue => { if (listeCollegue.length == 0) {
        this.erreurListe = true;
      } else { 
        (this.listePhoto = listeCollegue, this.erreurListe = false); 
      }
    }, 
    (respError: HttpErrorResponse) => { this.erreur = true, this.msgError = "Oups... Serveur déconnecté"}
    );
  }
}
