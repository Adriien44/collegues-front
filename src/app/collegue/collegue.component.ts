import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

col:Collegue; 

constructor(private _rechColl:DataService){
this.col = this._rechColl.recupererCollegueCourant(); 
}

modification:boolean = false; 

  quandOnCree(){
    console.log("Création d'un nouveau collègue")
  }
  
  quandOnModifi(){
    this.modification = true; 
    console.log("Modification du collègue")
  }

  quandOnValide(){
    this.modification = false; 
  }

  
  ngOnInit() {
  
  }
}
