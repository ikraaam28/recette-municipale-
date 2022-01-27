import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-login-paiement',
  templateUrl: './login-paiement.component.html',
  styleUrls: ['./login-paiement.component.css']
})
export class LoginPaiementComponent implements OnInit {
  user: User;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.user=new User();
  }
  save(){
    this.UserService.postUser(this.user).subscribe();
  }
}
