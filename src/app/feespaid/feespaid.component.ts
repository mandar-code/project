import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'feespaid',
  templateUrl: './feespaid.component.html',
  styleUrls: ['./feespaid.component.css']
})
export class FeespaidComponent implements OnInit {
  
  constructor() {}

  onSubmit() {
    alert('Otp Successfully Sent o Your Mobile Number');}

                      ngOnInit() {}
  
}
