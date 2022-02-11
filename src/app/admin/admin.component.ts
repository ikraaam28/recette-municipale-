import { Component, OnInit } from '@angular/core';
import {munic} from "../Model/municipale";
import{MunicService} from "../Services/munic.service";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listImob: munic[];
  constructor(private municService:MunicService) {


  }

  ngOnInit(): void {
    this.municService.getMunic().subscribe(
      (data:munic[])=> this.listImob = data
    );
  }
  get(){
    this.municService.getMunic().subscribe();
  }

}
