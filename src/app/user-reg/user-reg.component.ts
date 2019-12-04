import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  // users = ['Admin', 'Cashier' ,'Sales Assistant'];

  registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),  
  });
  constructor() { }

  ngOnInit() {
  }

}
