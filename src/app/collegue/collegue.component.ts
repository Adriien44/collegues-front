import { Component, OnInit, OnDestroy} from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

col:Collegue; 
actionSub:Subscription; 


constructor(private _rechColl:DataService){ 
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
  this.actionSub = this._rechColl.abonnement().subscribe(leMatricule =>(this._rechColl.getCollegue(leMatricule).subscribe(leCollegue => (this.col = leCollegue)))); 
    
  }

  ngOnDestroy(){
    this.actionSub.unsubscribe(); 
  }


}
