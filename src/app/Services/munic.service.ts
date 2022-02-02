import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{munic} from "../Model/municipale";

@Injectable({
  providedIn: 'root'
})

export class MunicService {

  url= 'http://localhost:3000/munic';
  constructor(private http:HttpClient) { }
  getMunic(){
    return this.http.get<munic[]>(this.url);
  }
  postMunic(munic:munic){
    return this.http.post(this.url,munic);
  }
}
