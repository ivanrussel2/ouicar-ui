export interface Utilisateur {
    id?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    password?: string;
    telephone?: string;
    dateNaissance?: string;
    adresse?: string;
    photo?: string;
    compte?: CompteENUM;
    vehicules?: Vehicule[];
    KBIS?: string;
    avisNote?: number;
    numPermis?: string;
    dateObtentionPermis?: Date;
    paysPermis?: string;
    reservations?: Reservation[];
    avis?: Avis[];
    roles?: Roles[];
}
export enum CompteENUM {

}
export interface Emplacement{
    id?:number;
    libelle?:string;
    longitude?:number;
    latitude?:number;
}
export interface Image{
    id?:number;
    url?:string
    type?:string
   vehicule?:Vehicule;
}
export interface Vehicule{
    id?:number;
    immat?:string;
    marque?:string;
    emplacements?:Emplacement[];
     prixJour?:number;
     prixKm?:number;
    tauxAccetation?:number;
     nbDemandesRecues?:number;
     nbDmdAcceptees?:number;
     nbDdRejetees?:number;
     nbReservation?:number;
    avis?:Avis[];
    images?:Image[];
    caracteristiqueTech?:CaracteristiqueTech;
    utilisateur ?:Utilisateur;
    reservations?:Reservation;
    accessoires?:Accessoire[];
}
export enum EnergieEnum{

}
export enum CategorieEnum{

}
export enum TypeVehiculeEnum{

}
export enum BoiteVitesseEnum{
    
}
export interface CaracteristiqueTech {
    id?:number;
    annee?:number ;
    categorie?:CategorieEnum;    
    energie?:EnergieEnum;    
    typeVehicule?:TypeVehiculeEnum;
    kilométrage?:number;
    
    boiteVitesse?:BoiteVitesseEnum;
    nbPorte?:number ;
    nbPlace?:number ;
}
export interface Accessoire{

}
export enum StatusDemandeEnum {

}
export interface Reservation {
    id?:number;
    vehicule?:Vehicule;
    dateDepart?:Date;
    
    heureDepart?:Date;
    dateRetour?:Date;
    
    heureRetour?:Date;
    messageAuProprio?:string;
    km?:number;
    locataire?:Utilisateur;
    
    status?:StatusDemandeEnum ;
    dateCreation?:Date;
}
export interface Roles{
    id?:number;
    libelle?:string;
}

export interface Avis {
    id?:number;
    vehicule?:Vehicule;
    moyenne?:number;
    commentaire?:string;
    utilisateur?:Utilisateur;
}