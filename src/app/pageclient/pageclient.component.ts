import { Component, OnInit } from '@angular/core';
import {imob} from "../Model/Imobilier";
import {ImobSeviceService} from "../Services/imob-sevice.service";
import {ActivatedRoute, RouterModule} from '@angular/router';
@Component({
  selector: 'app-pageclient',
  templateUrl: './pageclient.component.html',
  styleUrls: ['./pageclient.component.css']
})
export class PageclientComponent implements OnInit {
  listImob: imob[];
nb:number=5;
id:any;
  constructor(private ImobService:ImobSeviceService,private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ImobService.getImob().subscribe(
      (data:imob[])=> this.listImob = data,

    );


  }
  get(){
    this.ImobService.getImob().subscribe();

  }

}
