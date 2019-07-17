import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculeTest } from '../mock/matricules.mock';
import { obama } from '../mock/collegues.mock';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subMatricukeSelectionne = new Subject<string>(); 

  publier (unMatricule : string){
    this.subMatricukeSelectionne.next(unMatricule); 
  }

  abonnement(): Observable<string>{
    return this.subMatricukeSelectionne.asObservable(); 
  }

  constructor(private httpClient: HttpClient) { }

  rechercherParNom(unMatricule: string): any[] {
    return matriculeTest;
  }

  recupererCollegueCourant(): Collegue {
    return obama;
  }

  getMatricule(nom: string): Observable<string[]> {
    return this.httpClient
      .get<string[]>(environment.backendUrl+`?nom=${nom.trim()}`)
  }

getCollegue (unMatricule){
  return this.httpClient
    .get<Collegue>(environment.backendUrl+`/${unMatricule}`)
}

}
