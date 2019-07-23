import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private _connection:DataService, private router: Router) { }

  nomUtilisateur: string; 
  motDePasse : string; 

  erreur:boolean=false;

  connexion(){
    this._connection.connexionCollegue(this.nomUtilisateur, this.motDePasse).subscribe(()=>{(this.erreur=false, 
      this.router.navigate([`/accueil`]))}, 
    (respError : HttpErrorResponse) => {this.erreur=true}
    );
  }

  ngOnInit() {
  }

}
