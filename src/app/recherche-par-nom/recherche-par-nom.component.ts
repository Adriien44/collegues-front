import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

  matriculeT : any [];  

  constructor(private _rechNom:DataService){
  }
  
  retourneListeNom(nom:string){
    this.matriculeT = this._rechNom.rechercherParNom(nom); 
  }

  ngOnInit() {}

}
