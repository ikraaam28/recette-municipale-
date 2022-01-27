import { Component, OnInit } from '@angular/core';
import {imob} from "../Model/Imobilier";
import {ImobSeviceService} from "../Services/imob-sevice.service";


@Component({
  selector: 'app-addimob',
  templateUrl: './addimob.component.html',
  styleUrls: ['./addimob.component.css']
})
export class AddimobComponent implements OnInit {
IMOB : imob;

  constructor(private ImobService:ImobSeviceService) { }

  ngOnInit(): void {
this.IMOB= new imob();
  }
  save(){
    this.ImobService.postImob(this.IMOB).subscribe();
  }

}
