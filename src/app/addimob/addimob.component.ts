import { Component, OnInit } from '@angular/core';
import {imob} from "../Model/Imobilier";
import {ImobSeviceService} from "../Services/imob-sevice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {munic} from "../Model/municipale";
import {MunicService} from "../Services/munic.service";

import { ToastrService } from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-addimob',
  templateUrl: './addimob.component.html',
  styleUrls: ['./addimob.component.css']
})
export class AddimobComponent implements OnInit {
  IMOB : imob;
  munic:munic[];
id:any;
boo:boolean=false;
  constructor(private ImobService:ImobSeviceService,private municService:MunicService,private route: ActivatedRoute, private router:Router,private toastrService: ToastrService) { }
  loginForm=new FormGroup({
    ide:new FormControl('',[Validators.required]),
    loc:new FormControl('',[Validators.required]),

  });

  loginUser(){
    console.warn(this.loginForm.value)
  }
  get ide(){
    return this.loginForm.get('ide');
  }
  get loc(){
    return this.loginForm.get('loc');
  }
  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    this.IMOB= new imob();
    this.municService.getMunic().subscribe(
      (data:munic[])=> this.munic = data,
    )
  }
  save(){
    for (let i = 0; i < this.munic.length; i++) {
      if( this.munic[i].id == this.IMOB.id && this.munic[i].localisation.toUpperCase() == this.IMOB.localisation.toUpperCase()) {
        this.IMOB.idUser = this.id;
        this.IMOB.etat= this.munic[i].etat;
        this.ImobService.postImob(this.IMOB).subscribe();
 this.boo=true;
        this.router.navigate(['/pageclient/' + this.id]).then(() => {
          window.location.reload();
        });
      }

    }
    if(!this.boo){
    this.toastrService.error( 'Title error!');
      this.router.navigate(['/addimob/' + this.id]).then(() => {
        window.location.reload();
      });}
    else{
      this.toastrService.success( 'immobilier ajouter avec succès!');
    }
  }

}
