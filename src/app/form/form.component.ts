import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() validerCreation:EventEmitter<boolean> = new EventEmitter<boolean>();
  erreur:boolean = false; 
  msgError:string; 


  constructor(private _ajoutColl:DataService) { }

  collegue = new Collegue("","","","",""); 
  close:boolean=false; 

  ngOnInit() {}

  ajouter(){
    this._ajoutColl.ajouterCollegue(this.collegue).subscribe(()=>{(this.validerCreation.emit(false))}, 
    (respError : HttpErrorResponse) => {this.erreur = true, this.msgError = respError.error}
    );
  }
}
