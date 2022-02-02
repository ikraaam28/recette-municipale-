import { Component, OnInit } from '@angular/core';
declare const test:any;
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
calltest(){
  test();
}
  constructor() { }

  ngOnInit(): void {

  }

}
