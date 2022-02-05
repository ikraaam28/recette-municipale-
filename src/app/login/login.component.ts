
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {User} from "../Model/User";
import {UserService} from "../Services/user.service";
import {Router} from "@angular/router";
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1: User;
  userlist:User[];
  private readonly notifier:NotifierService;

loginForm=new FormGroup({
  user:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required]),

});
 loginUser(){
  console.warn(this.loginForm.value)
}
get user(){
  this.notifier.notify('success', 'chech your password!');
 return this.loginForm.get('user');
}
get password(){
   return this.loginForm.get('password');
}
  constructor(private UserService:UserService, private router:Router,notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.user1=new User();
    this.UserService.getUser().subscribe(
      (data:User[])=> this.userlist = data
    );
  }
  save(){

     if(this.user1.email=="admin@gmail.com" ){
       if(this.user1.mdp== "123"){
       this.notifier.notify('success', 'chech your password!');
       this.router.navigate(['/','admin']);
     }else{
       this.notifier.notify('success', 'chech your password!');
     }
     }
   else{
     for (let i = 0; i < this.userlist.length; i++) {
       if(this.userlist[i].email== this.user1.email && this.userlist[i].mdp== this.user1.mdp  ){
         this.notifier.show({
           type: 'success',
           message: 'You are awesome! I mean it!',
           id: 'THAT_NOTIFICATION_ID', // Again, this is optional
         });
         this.notifier.notify('success', 'chech your password!');
         this.router.navigate(['/','pageclient']);

       }else{
         this.notifier.notify('success', 'chech your password!');
       }
     }

   }
  /* this.user1.role="user";
    this.UserService.postUser(this.user1).subscribe();*/
  }
}
