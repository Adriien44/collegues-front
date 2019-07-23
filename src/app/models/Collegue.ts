export class Collegue {
    matricule?: string;
    nom : string; 
    prenom : string;
    email : string; 
    dateDeNaissance : string; 
    photoUrl : string; 
    nomUtilisateur : string;
    motDePasse : string; 
    role : string[]; 

    constructor(nom, prenom, email, dateDeNaissance, photoUrl, nomUtilisateur, motDePasse, role ){
        this.nom = nom; 
        this.prenom = prenom; 
        this.email = email;  
        this.dateDeNaissance = dateDeNaissance; 
        this.photoUrl = photoUrl; 
        this.nomUtilisateur=nomUtilisateur;
        this.motDePasse = motDePasse;
        this.role=role; 
    }
}