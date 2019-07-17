export class Collegue {

    matricule : string; 
    nom : string; 
    prenom : string;
    email : string; 
    dateDeNaissance : string; 
    photoUrl : string; 

    constructor(matricule, nom, prenom, email, dateDeNaissance, photoUrl ){
        this.matricule = matricule; 
        this.nom = nom; 
        this.prenom = prenom;
        this.email = email;  
        this.dateDeNaissance = dateDeNaissance; 
        this.photoUrl = photoUrl; 
    }


}