import { State, District } from './../selectdata';
import { SelectService } from './../select.service';
import { FormsModule, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent, mixinColor } from '@angular/material';
import * as _ from 'lodash';
import { isTemplateExpression } from 'typescript';


interface examination1 {
  value: string;
  viewValue: string;}
interface examination2 {
  value: string;
  viewValue: string;}
interface examination3 {
  value: string;
  viewValue: string;}
interface examination4 {
  value: string;
  viewValue: string;}
@Component({
  selector: 'admissionforms',
  templateUrl: './admissionforms.component.html',
  styleUrls: ['./admissionforms.component.css'],
  providers:[SelectService]
})
export class AdmissionformsComponent implements OnInit {

 
  form: FormGroup;
  
  districts: District[];
  states: State[];



group0= new FormGroup({
    category: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required])})
group5=new FormGroup({
  aadhar1:new FormControl('',Validators.required),
  rationcard:new FormControl('',Validators.required),
  sem1:new FormControl('',Validators.required),
  sem2:new FormControl('',Validators.required),})
group6=new FormGroup({
  photo : new FormControl('',[Validators.required]),})
group7=new FormGroup({
  sign : new FormControl('',[Validators.required]),
  check : new FormControl('',[Validators.required])})
group4=new FormGroup({
room:new FormControl('',Validators.required),
country:new FormControl('',[Validators.required]),
state:new FormControl('',[Validators.required]),
dis:new FormControl('',[Validators.required]),
pin : new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
room1:new FormControl('',[Validators.required]),
country1:new FormControl('',[Validators.required]),
state1:new FormControl('',[Validators.required]),
city1:new FormControl('',[Validators.required]),
dis1:new FormControl('',[Validators.required]),
pin1 : new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]),})

group1=new FormGroup({
 ssc : new FormControl('',[Validators.required,]),
 boarduniversity: new FormControl('',[Validators.required,]),
 schoolcollege: new FormControl('',[Validators.required, ]),
 moo:  new FormControl('',[Validators.required,]),
 percentage: new FormControl('',[Validators.required]),
 passing: new FormControl('',[Validators.required ]),
 mo:  new FormControl('',[Validators.required ]),
 seatrollno : new FormControl('',[Validators.required]),

 hsc : new FormControl('',[Validators.required,]),
 boarduniversity1: new FormControl('',[Validators.required,]),
 schoolcollege1: new FormControl('',[Validators.required, ]),
 moo1:  new FormControl('',[Validators.required,]),
 percentage1: new FormControl('',[Validators.required]),
 passing1: new FormControl('',[Validators.required ]),
 mo1:  new FormControl('',[Validators.required ]),
 seatrollno1 : new FormControl('',[Validators.required]),

 sem1 : new FormControl('',[Validators.required,]),
 boarduniversity2: new FormControl('',[Validators.required,]),
 schoolcollege2: new FormControl('',[Validators.required, ]),
 seatrollno2 : new FormControl('',[Validators.required]),
 passing2: new FormControl('',[Validators.required ]),
 moo2:  new FormControl('',[Validators.required,]),
 percentage2: new FormControl('',[Validators.required]),

 sem2 : new FormControl('',[Validators.required,]),
 boarduniversity3: new FormControl('',[Validators.required,]),
 schoolcollege3: new FormControl('',[Validators.required, ]),
 moo3:  new FormControl('',[Validators.required,]),
 percentage3: new FormControl('',[Validators.required]),
 passing3: new FormControl('',[Validators.required ]),
 seatrollno3 : new FormControl('',[Validators.required]),})

group=new FormGroup({
fullname:new FormControl('',Validators.required), 
mothername:new FormControl('',Validators.required), 
dob :new FormControl('',Validators.required),
firstname : new FormControl('', Validators.required),
middlename:new FormControl('',Validators.required),
gender : new FormControl('',Validators.required),
nationality : new FormControl('',Validators.required),
mstatus : new FormControl('',Validators.required),
religion : new FormControl('',Validators.required),
mothertongue:new FormControl('',Validators.required),
number : new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
email : new FormControl('', [Validators.required, Validators.email]),
Aadhar : new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
pob : new FormControl('',Validators.required),
bloodgroup: new FormControl('',Validators.required),
income: new FormControl('',Validators.required),
motherfullname: new FormControl('',Validators.required),
fatherfullname: new FormControl('',Validators.required),
mobileno: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])})

  exam1: examination1[] = [
    {value: 'SSC', viewValue: 'SSC'},];
  exam2: examination2[] = [
    {value: 'HSC', viewValue: 'HSC'},];
  exam3: examination3[] = [
    {value: 'Sem1', viewValue: 'Sem1'},
    {value: 'Sem3', viewValue: 'Sem3'},];
  exam4: examination4[] = [
    {value: 'Sem2', viewValue: 'Sem2'},
    {value: 'Sem4', viewValue: 'Sem4'},];
  

  ///////////////tab change index
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
}
public nextStep() {
    this.selectedIndex += 1;
}
public prevStep() {
    this.selectedIndex -= 1;}

    ////object s
  selectedIndex: number;
  isChecked: boolean;

  imageError: any;
  cardImageBase64: any;
  isImageSaved: boolean;

  imageError1: any;
  cardImage1Base64: any;
  isImage1Saved: boolean;

  signError:any;
  cardSignBase64:any;
  isSignSaved:boolean;

//same address
checkValue(e) { {
  if (e.target.checked) {
    const dVal = this.form.controls["room"].value;
    const coun= this.form.controls["country"].value;
    const sta= this.form.controls["state"].value;
    const di= this.form.controls["dis"].value;
    const ci= this.form.controls["city"].value;
    const pi= this.form.controls["pin"].value;
    this.form.controls["room1"].setValue(dVal);
    this.form.controls["country1"].setValue(coun);
    this.form.controls["state1"].setValue(sta);
    this.form.controls["dis1"].setValue(di);
    this.form.controls["city1"].setValue(ci);
    this.form.controls["pin1"].setValue(pi);
  
  }
  else {
    this.form.controls["room1"].setValue('');
    this.form.controls["country1"].setValue('');
    this.form.controls["state1"].setValue('');
    this.form.controls["dis1"].setValue('');
    this.form.controls["city1"].setValue('');
    this.form.controls["pin1"].setValue('');
 `` }}}

constructor(private fb: FormBuilder,private route: ActivatedRoute,private selectService: SelectService) {
this.isChecked = false;
this.form = this.fb.group({
room: [''],room1: [''],
country:[''],country1:[''],
state:[''],state1:[''],
dis:[''],dis1:[''],
city:[''],city1:[''],
pin:[''],pin1:[''],
});
}
//////ngonit
ngOnInit() {this.selectedIndex=0;


  this.states = this.selectService.getStates();}

onSelect(stateid) {
  this.districts = this.selectService.getDistricts().filter((item) => item.stateid == stateid);}
  onSelect1(stateid) {
    this.districts = this.selectService.getDistricts().filter((item) => item.stateid == stateid);}



fileChangeEvent2(fileInput: any) {
this.imageError = null;
if (fileInput.target.files && fileInput.target.files[0]) {
// Size Filter Bytes
const max_size = 1000000;
const allowed_types =  ['application/pdf', 'image/jpg','image/jpeg'];

  
if (fileInput.target.files[0].size > max_size) {
this.imageError ='* Upto 1000kb';
return false;}

if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
this.imageError = '* The file format should ( JPG | JPEG | PDF )';
return false;}    
}
}
/////////////////for image1 
fileChangeEvent(fileInput: any) {
this.imageError1 = null;
if (fileInput.target.files && fileInput.target.files[0]) {
 // Size Filter Bytes
const max_size = 300000;
const allowed_types = ['image/jpg', 'image/jpeg'];

if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
this.imageError1 = '* Photograph Format should be JPEG';
return false;}

const reader = new FileReader();
reader.onload = (e: any) => {
const image = new Image();
image.src = e.target.result;
image.onload = rs => {

if ( fileInput.target.files[0].size > max_size) {
  this.imageError1 = ' upto 300kb';
  return false;}
else {
const imgBase64Path = e.target.result;
 this.cardImage1Base64 = imgBase64Path;
this.isImage1Saved = true;
}                
};
};
reader.readAsDataURL(fileInput.target.files[0]);
}
}
   
 /////////////////for sign
fileChangeEvent1(fileInput1: any) {
this.signError = null;
if (fileInput1.target.files && fileInput1.target.files[0]) {
// Size Filter Bytes
const max_size = 300000;
const allowed_types = ['image/jpg', 'image/jpeg'];
if (!_.includes(allowed_types, fileInput1.target.files[0].type)) {
this.signError = '* Photograph Format should be JPEG';
return false;}
const reader1 = new FileReader();
reader1.onload = (e: any) => {
const image1 = new Image();
image1.src = e.target.result;
image1.onload = rs => {

                
if ( fileInput1.target.files[0].size > max_size) {
  this.signError = 'The size of the photograph should fall between 5KB to 20KB';
  return false;}
else {
const signBase64Path = e.target.result;
this.cardSignBase64 = signBase64Path;
this.isSignSaved = true;}
};};
reader1.readAsDataURL(fileInput1.target.files[0]);}}

removeImage() {this.cardImage1Base64 = null;this.isImage1Saved = false;}
removeSign(){this.cardSignBase64 = null;this.isSignSaved = false;}





 



  
  
  
 
 
}