import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { tap, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  
 
})

export class AppComponent  {



 
  constructor(private breakpointObserver: BreakpointObserver,private fb: FormBuilder){

  }
   

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(map(result => result.matches),
    shareReplay()
  );

  ngOnInit() {
    


  

  }
 
    
  
  
}