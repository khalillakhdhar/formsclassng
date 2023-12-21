import { Component } from '@angular/core';
import { Rdv } from '../shared/rdv';
import { RdvService } from '../shared/rdv.service';

@Component({
  selector: 'app-addrdv',
  templateUrl: './addrdv.component.html',
  styleUrl: './addrdv.component.css'
})
export class AddrdvComponent {
  rendezvous=new Rdv();
  constructor(private rdvService:RdvService) { 

  }
  addRdv()
  {
    this.rdvService.addRdv(this.rendezvous);
    this.rendezvous=new Rdv();
  }

}
