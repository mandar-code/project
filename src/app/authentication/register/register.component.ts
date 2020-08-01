import { Component, OnInit, NgModule } from '@angular/core';
import { Validators, FormControl, FormGroup, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { Directive, ElementRef } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  matcher = new MyErrorStateMatcher();
  hide = true;

  registerUserData = {}


  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      userid:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.maxLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: []
    }, { validator: this.checkPasswords });

  }
  ngOnInit() {
  }
  registerUser(){
    console.log(this.registerUserData)
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
