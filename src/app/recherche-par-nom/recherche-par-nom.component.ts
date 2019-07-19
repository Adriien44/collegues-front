import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

  matriculeT: string[];
  erreur: boolean = false;
  erreurCollegue: boolean = false;
  msgError: string;


  constructor(private _rechNom: DataService) {
  }

  retourneMatricule(nom: string) {
    if (nom != "") {
      return this._rechNom.getMatricule(nom).subscribe
        (tableauMatricule => {
          if (tableauMatricule.length == 0) {
            this.erreurCollegue = true;
          } else {
            (this.matriculeT = tableauMatricule, this.erreurCollegue = false)
          }
        },
          (respError: HttpErrorResponse) => { this.erreur = true, this.msgError = "Oups... Serveur déconnecté"}
        );
    }
  }

  sendMatricule(unMatricule: string) {
    this._rechNom.publier(unMatricule)
  }
  ngOnInit() {
  }


}