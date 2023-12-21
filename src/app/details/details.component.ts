import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RdvService } from '../shared/rdv.service';
import { Rdv } from '../shared/rdv';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id:string="";
  rdv:any;
  // constructeur récupérant l'id de l'url
  constructor(private route: ActivatedRoute,private rdvService:RdvService) {
    this.id=this.route.snapshot.params['id'];
    console.log("current id",this.id);
this.rdv=this.rdvService.getRdvById(parseInt(this.id));
console.log("current rdv",this.rdv);
  }

}
