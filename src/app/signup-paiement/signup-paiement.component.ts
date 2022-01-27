import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-signup-paiement',
  templateUrl: './signup-paiement.component.html',
  styleUrls: ['./signup-paiement.component.css']
})
export class SignupPaiementComponent implements OnInit {
  user: User;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.user=new User();
  }
  save(){
    this.UserService.postUser(this.user).subscribe();
  }
}
