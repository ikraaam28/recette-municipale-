
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {User} from "../Model/User";
import {UserService} from "../Services/user.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user1: User;
  userlist:User[];
boo:boolean=false;

  constructor(private UserService:UserService, private router:Router,private toastrService: ToastrService) {
    this.user1=new User();
  }
  logForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),

  });

  loginUser(){
    console.warn(this.logForm.value)
  }
  get user(){
    return this.logForm.get('user');
  }
  get password(){
    return this.logForm.get('password');
  }
  ngOnInit(): void {

    this.UserService.getUser().subscribe(
      (data:User[])=> this.userlist = data
    );

  }


  save(){

    if(this.user1.email=="admin@gmail.com" ){
      if(this.user1.mdp== "123"){
        this.boo=true;
        this.router.navigate(['/','admin']);
      }
    }
    else{
      for (let i = 0; i < this.userlist.length; i++) {
        if(this.userlist[i].email== this.user1.email && this.userlist[i].mdp== this.user1.mdp  ){
this.boo=true;

          this.router.navigate(['/pageclient/'+this.userlist[i].id]);
          this.toastrService.success( 'Welcome  '+this.user1.email);

        }
      }

    }
    if(!this.boo){
      this.toastrService.error( ' utilisateur non trouver');
      this.router.navigate(['/','signup']);
    }
  /* this.user1.role="user";
    this.UserService.postUser(this.user1).subscribe();*/
  }
}
