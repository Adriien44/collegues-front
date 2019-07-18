import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Observable, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subMatricukeSelectionne = new Subject<string>();

  publier(unMatricule: string) {
    this.subMatricukeSelectionne.next(unMatricule);
  }

  abonnement(): Observable<string> {
    return this.subMatricukeSelectionne.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  getMatricule(nom: string): Observable<string[]> {

    return this.httpClient
      .get<string[]>(environment.backendUrl + `?nom=${nom}`)

  }

  getCollegue(unMatricule) {
    return this.httpClient
      .get<Collegue>(environment.backendUrl + `/${unMatricule}`)
  }

  modifierCollegue(unMatricule: string, collegue: Collegue) {
    return this.httpClient
      .patch<Collegue>(environment.backendUrl + `/${unMatricule}`, collegue);
  }

  ajouterCollegue (collegue: Collegue){
    return this.httpClient
    .post<Collegue>(environment.backendUrl, collegue);
  }
}
