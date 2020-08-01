import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpasword',
  templateUrl: './forgotpasword.component.html',
  styleUrls: ['./forgotpasword.component.css']
})
export class ForgotpaswordComponent implements OnInit {
  form= new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    })
  constructor() { }

  ngOnInit() {
  }

}
