import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent implements OnInit {

  constructor(private _data:DataService, private router: Router) { }

  deconnection(){
    return this._data.logout().subscribe(); 
  }


  ngOnInit() {
  }

}
