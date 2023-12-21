import { Component } from '@angular/core';
import { Rdv } from '../shared/rdv';
import { RdvService } from '../shared/rdv.service';

@Component({
  selector: 'app-readrdv',
  templateUrl: './readrdv.component.html',
  styleUrl: './readrdv.component.css'
})
export class ReadrdvComponent {
rdvs:Rdv[]=[];
constructor(private rdvService:RdvService) { 
  this.rdvs=this.rdvService.getRdvs();
}

}
