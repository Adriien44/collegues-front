import { Component, OnInit, OnDestroy} from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

col:Collegue; 
actionSub:Subscription; 

msgError:string;
erreur:boolean = false; 


constructor(private _rechColl:DataService){ }

modification:boolean = false; 
creation:boolean = false;

  quandOnCree(){
    console.log("Création d'un nouveau collègue")
    this.creation = true; 
  }
  
  quandOnModifi(){
    this.modification = true; 
    console.log("Modification du collègue")
  }

  validation(){
    this._rechColl.modifierCollegue(this.col.matricule, this.col).subscribe(() =>{ (this.modification = false, this.erreur = false)}, 
    (respError : HttpErrorResponse) => {this.erreur = true, this.msgError = respError.error}
    );
  }
  
  outPutCrea($event){
    if ($event == false){
      this.creation = false; 
    }
  }

  ngOnInit() {
  this.actionSub = this._rechColl.abonnement().subscribe(leMatricule =>(this._rechColl.getCollegue(leMatricule).subscribe(leCollegue => (this.col = leCollegue)))); 
    
  }

  ngOnDestroy(){
    this.actionSub.unsubscribe(); 
  }


}
