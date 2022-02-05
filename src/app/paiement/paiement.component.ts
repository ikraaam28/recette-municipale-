import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ImobSeviceService} from "../Services/imob-sevice.service";
import {imob} from "../Model/Imobilier";
import {Observable} from "rxjs";
declare const test:any;
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
calltest(){
  test();
}
id:any;
local:any;
imo:imob[];
im:imob;
  constructor(private route: ActivatedRoute,private imobservice: ImobSeviceService) {
this.im=new imob();
  }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
   this.local=this.route.snapshot.paramMap.get('localisation');

    this.im.id= this.id;
    this.im.localisation= this.local;
    this.im.etat= "paye";
  console.log(this.id);
  }
  paye(){
    this.imobservice.putImob(this.id,this.im).subscribe();
  }

}
