import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { GallerieCollegue } from '../models/GallerieCollegue';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  constructor(private _gallerie:DataService) { }

  listePhoto:GallerieCollegue[];


  ngOnInit() {
    return this._gallerie.getPhoto().subscribe(listeCollegue => this.listePhoto = listeCollegue);
  }

}
