import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

  matriculeT : string [];  

  constructor(private _rechNom:DataService){
  }
  
  retourneMatricule(nom:string){
    return this._rechNom.getMatricule(nom).subscribe(tableauMatricule=>{
      (this.matriculeT = tableauMatricule)
    }, 
    (error : HttpErrorResponse) => { console.log("Code erreur " + error.status + " - Serveur déconnecté")}
    );
  }

  sendMatricule(unMatricule:string){
    this._rechNom.publier(unMatricule)
  }
  ngOnInit() {
  }

 
}
