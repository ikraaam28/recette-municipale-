import { Component, OnInit } from '@angular/core';
import {ImobSeviceService} from "../Services/imob-sevice.service";
import {MunicService} from "../Services/munic.service";
import {imob} from "../Model/Imobilier";
import {munic} from "../Model/municipale";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-addimobmunic',
  templateUrl: './addimobmunic.component.html',
  styleUrls: ['./addimobmunic.component.css']
})
export class AddimobmunicComponent implements OnInit {
municipale:munic;
  boo:boolean=false;
  constructor(private municservice:MunicService,private toastrService: ToastrService,private route: ActivatedRoute, private router:Router) { }

  addForm=new FormGroup({
    id:new FormControl('',[Validators.required]),
    loc:new FormControl('',[Validators.required]),
    eta:new FormControl('',[Validators.required]),

  });

  loginUser(){
    console.warn(this.addForm.value)
  }
  get id(){
    return this.addForm.get('id');
  }
  get loc(){
    return this.addForm.get('loc');
  }
  get eta(){
    return this.addForm.get('eta');
  }

  ngOnInit(): void {
    this.municipale= new munic();
  }
  save(){
    this.municservice.postMunic(this.municipale).subscribe();
    this.toastrService.success( 'immobilier ajouter avec succès!');
    this.router.navigate(['/admin/']).then(() => {
      window.location.reload();
    });
  }

}
