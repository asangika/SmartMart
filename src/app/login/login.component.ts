import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // Username:string;
  // password:string;

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),  
  });
  
  onclick(){

  }
  constructor() { }

  ngOnInit() {

  }

   



}
