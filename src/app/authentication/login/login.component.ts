import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;

  form= new FormGroup({
    userid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])})
  constructor() { }

  ngOnInit() {
  }

}
