import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GallerieCollegue } from '../models/GallerieCollegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subMatriculeSelectionne = new Subject<string>();


  userConnection: boolean;

  publier(unMatricule: string) {
    this.subMatriculeSelectionne.next(unMatricule);
  }

  abonnement(): Observable<string> {
    return this.subMatriculeSelectionne.asObservable();
  }

  constructor(private httpClient: HttpClient, private _dataUser: DataService) { }

  getMatricule(nom: string): Observable<string[]> {

    return this.httpClient
      .get<string[]>(environment.backendUrl + `/collegues?nom=${nom}`, { withCredentials: true });
  }

  getCollegue(unMatricule) {
    return this.httpClient
      .get<Collegue>(environment.backendUrl + `/collegues/${unMatricule}`, { withCredentials: true });
  }

  getPhoto() {
    return this.httpClient
      .get<GallerieCollegue[]>(environment.backendUrl + `/collegues/photo`, { withCredentials: true });
  }

  modifierCollegue(unMatricule: string, collegue: Collegue) {
    return this.httpClient
      .patch<Collegue>(environment.backendUrl + `/collegues/${unMatricule}`, collegue, { withCredentials: true });
  }

  ajouterCollegue(collegue: Collegue) {
    return this.httpClient
      .post<Collegue>(environment.backendUrl, collegue, { withCredentials: true });
  }

  connexionCollegue(user: string, password: string) {
    return this.httpClient
      .post<String>(environment.backendUrl + `/collegues/auth`, {
        "nomUtilisateur": user,
        "motDePasse": password
      }, { withCredentials: true });
  }

  collegueConnecte(): Observable <Collegue> {
 
    return this.httpClient.get<Collegue>(environment.backendUrl + `/collegues/me`, { withCredentials: true }); 
  }

  logout(){
    return this.httpClient.get('http://localhost:8080/logout', {withCredentials:true});
  }

}