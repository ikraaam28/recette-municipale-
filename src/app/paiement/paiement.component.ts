import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ImobSeviceService} from "../Services/imob-sevice.service";
import {imob} from "../Model/Imobilier";
import {Observable} from "rxjs";
import {munic} from "../Model/municipale";
import {MunicService} from "../Services/munic.service";
import {ToastrService} from "ngx-toastr";
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
  munic:munic[];
  iduser:any;
  constructor(private route: ActivatedRoute,private imobservice: ImobSeviceService,private municService:MunicService, private router:Router,private toastrService: ToastrService) {
this.im=new imob();
  }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
   this.local=this.route.snapshot.paramMap.get('localisation');
    this.iduser=this.route.snapshot.paramMap.get('idUser');
    this.municService.getMunic().subscribe(
      (data:munic[])=> this.munic = data,
    )
    this.im.id= this.id;
    this.im.localisation= this.local;
    this.im.etat= "paye";
    this.im.idUser= this.iduser;
  console.log(this.id);
  }
  paye(){
    for (let i = 0; i < this.munic.length; i++) {
      if(this.munic[i].id == this.id){
          this.munic[i].etat= "paye";
          this.municService.putMunic(this.id,this.munic[i]).subscribe();
        this.imobservice.putImob(this.id,this.im).subscribe();
        this.toastrService.success( 'paiement avec succes ');
        this.router.navigate(['/pageclient/'+this.iduser]).then(() => {
          window.location.reload();
        });
      }
    }
  }

}
