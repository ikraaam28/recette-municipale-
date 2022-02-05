import { Component, OnInit } from '@angular/core';
import {User} from "../Model/User";
import {UserService} from "../Services/user.service";


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
    this.user.role="user";
    this.UserService.postUser(this.user).subscribe();
  }
}
