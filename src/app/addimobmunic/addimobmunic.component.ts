import { Component, OnInit } from '@angular/core';
import {ImobSeviceService} from "../Services/imob-sevice.service";
import {MunicService} from "../Services/munic.service";
import {imob} from "../Model/Imobilier";
import {munic} from "../Model/municipale";

@Component({
  selector: 'app-addimobmunic',
  templateUrl: './addimobmunic.component.html',
  styleUrls: ['./addimobmunic.component.css']
})
export class AddimobmunicComponent implements OnInit {
municipale:munic;

  constructor(private municservice:MunicService) { }

  ngOnInit(): void {
    this.municipale= new munic();
  }
  save(){
    this.municservice.postMunic(this.municipale).subscribe();
  }
}
