import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {User} from "../Model/User";


@Injectable({
  providedIn: 'root'
})
export class UserService {
url= 'http://localhost:3000/user';
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get<User[]>(this.url);
  }
  postUser(user:User){
    return this.http.post(this.url,user);
  }
}
