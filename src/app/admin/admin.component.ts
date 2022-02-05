import { Component, OnInit } from '@angular/core';
import {imob} from "../Model/Imobilier";
import {ImobSeviceService} from "../Services/imob-sevice.service";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listImob: imob[];
  constructor(private ImobService:ImobSeviceService) {


  }

  ngOnInit(): void {
    this.ImobService.getImob().subscribe(
      (data:imob[])=> this.listImob = data
    );
  }
  get(){
    this.ImobService.getImob().subscribe();
  }

}
