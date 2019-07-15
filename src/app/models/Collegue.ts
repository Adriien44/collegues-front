import {Component, Input} from '@angular/core';

@Component({
    selector: 'collegue',
    template: ''
})

export class Collegue {

    matricule : string; 
    nom : string; 
    prenoms : string;
    email : string; 
    dateDeNaissance : string; 
    photoUrl : string; 

    constructor(matricule, nom, prenoms, email, dateDeNaissance, photoUrl ){
        this.matricule = matricule; 
        this.nom = nom; 
        this.prenoms = prenoms;
        this.email = email;  
        this.dateDeNaissance = dateDeNaissance; 
        this.photoUrl = photoUrl; 
    }


}