import { Component, OnInit } from '@angular/core';
import {User} from "../Model/User";
import {UserService} from "../Services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-signup-paiement',
  templateUrl: './signup-paiement.component.html',
  styleUrls: ['./signup-paiement.component.css']
})
export class SignupPaiementComponent implements OnInit {
  user1: User;
  userlist:User[];

  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])

  });
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor(private UserService:UserService, private router:Router,private toastrService: ToastrService) {
    this.user1=new User();
  }


  ngOnInit(): void {
  }
  save(){

      for (let i = 0; i < this.userlist.length; i++) {
        if(this.userlist[i].email== this.user1.email && this.userlist[i].mdp== this.user1.mdp  )
        {
          this.toastrService.error( ' utilisateur deja trouver');
        }
        else{
          this.user1.role="user";
          this.UserService.postUser(this.user1).subscribe();

        }
      }

   }
}
