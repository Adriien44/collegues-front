import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculeTest } from '../mock/matricules.mock';
import { obama } from '../mock/collegues.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

rechercherParNom (nom:string) : any [] {
  return matriculeTest;
}

recupererCollegueCourant () : Collegue {
  return obama; 
}
}
