import { Component, OnInit } from '@angular/core';
import {imob} from "../Model/Imobilier";
import {ImobSeviceService} from "../Services/imob-sevice.service";

@Component({
  selector: 'app-pageclient',
  templateUrl: './pageclient.component.html',
  styleUrls: ['./pageclient.component.css']
})
export class PageclientComponent implements OnInit {
  listImob: imob[];

  constructor(private ImobService:ImobSeviceService) { }

  ngOnInit(): void {

    this.ImobService.getImob().subscribe(
      (data:imob[])=> this.listImob = data
    );
  }
  get(){
    this.ImobService.getImob().subscribe();
  }
}
