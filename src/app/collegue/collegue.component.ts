import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

@Input() col:Collegue; 

  quandOnCree(){
    console.log("Création d'un nouveau collègue")
  }
  
  quandOnModifi(){
    console.log("Modification du collègue")
  }
  
  ngOnInit() {
  
  }
}
