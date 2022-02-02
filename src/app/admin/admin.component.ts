import { Component, OnInit } from '@angular/core';
import {munic} from "../Model/municipale";
import {MunicService} from "../Services/munic.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listmunicipale: munic[];
  constructor(private municservice: MunicService) {


  }

  ngOnInit(): void {
    this.municservice.getMunic().subscribe(
      (data:munic[])=> this.listmunicipale = data
    );
  }
  get(){
    this.municservice.getMunic().subscribe();
  }
}
