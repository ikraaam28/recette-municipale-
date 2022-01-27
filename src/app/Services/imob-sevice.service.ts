import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {imob} from "../Model/Imobilier";

@Injectable({
  providedIn: 'root'
})
export class ImobSeviceService {

  url= 'http://localhost:3000/imob';
  constructor(private http:HttpClient) { }
  getImob(){
    return this.http.get<imob[]>(this.url);
  }
  postImob(imob:imob){
    return this.http.post(this.url,imob);
  }
}
