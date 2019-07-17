import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

  matriculeT : string [];  

  constructor(private _rechNom:DataService){
  }
  
  retourneMatricule(nom:string){
    return this._rechNom.getMatricule(nom).subscribe(tableauMatricule=> (this.matriculeT = tableauMatricule)); 
  }
  sendMatricule(unMatricule:string){
    this._rechNom.publier(unMatricule)
  }
  ngOnInit() {
  }

}
