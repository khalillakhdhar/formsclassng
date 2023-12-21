import { Injectable } from '@angular/core';
import { Rdv } from './rdv';

@Injectable({
  providedIn: 'root'
}) // service injectable dans tous les composants de l'application
export class RdvService {
  // tableau de rdv
  rdvs:Rdv[]=[];

  constructor() { }
  // ajouter un rdv dans le tableau rdvs
  addRdv(rdv:Rdv){
    this.rdvs.push(rdv);
  }
getRdvs()
{
  return this.rdvs;
}



  // calculer le nombre des rdv
  getRdvCount()
  {
    return this.rdvs.length;
  }
  // calculer le montant total des rdv
  getTotal()
  {
    let total=0;
 for( let rd of this.rdvs)
 {
    total+=rd.montant!;
 }
  }
  // afficher les détails d'un rdv
  getRdvById(id:number)
  {
    return this.rdvs[id];
  }
  // supprimer un rdv
  deleteRdv(id:number)
  {
    this.rdvs.splice(id,1);
  }
}
