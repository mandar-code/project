
import { RouterModule } from '@angular/router';
import { MatCheckboxModule, MatSnackBar, MAT_CHECKBOX_CLICK_ACTION, MatDialog } from '@angular/material';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {PortalModule} from '@angular/cdk/portal';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarModule } from 'ng-sidebar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { AdmissionformsComponent } from './admissionforms/admissionforms.component';
import { FeespaidComponent } from './feespaid/feespaid.component';
import { PaymentsummaryComponent } from './paymentsummary/paymentsummary.component';
import { SubmittedformsComponent } from './submittedforms/submittedforms.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { PendingfeesComponent } from './pendingfees/pendingfees.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgotpaswordComponent } from './authentication/forgotpasword/forgotpasword.component';
import { InstituteloginComponent } from './authentication/institutelogin/institutelogin.component';
import { LoginComponent } from './authentication/login/login.component';















@NgModule({
  declarations: [
    AppComponent,
    AdmissionformsComponent,
    FeespaidComponent,
    PaymentsummaryComponent,
    SubmittedformsComponent,
  LoginComponent,
    EditprofileComponent,
    PendingfeesComponent,
    RegisterComponent,
    ForgotpaswordComponent,
    InstituteloginComponent,


  ],

  imports: [
        FormsModule,
         BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'pendingfees',
        component:PendingfeesComponent
      },
      {
      path:'admissionform',
      component:AdmissionformsComponent
      },

      {
        path:'submittedforms',
      component:SubmittedformsComponent

      },
      {
        path:'feespaid',
        component:FeespaidComponent
      },
      {
        path:'paymentsummary',
        component:PaymentsummaryComponent
      },
      {
        path:'Profile',
        component:EditprofileComponent
      },
      {
         path:'login',
         component:LoginComponent
      },
    {
      path:'register',
      component:RegisterComponent
    },
    {
      path:'forgotpassword',
      component:ForgotpaswordComponent
    },
    {
      path:'institutelogin',
      component:InstituteloginComponent
    },


    ]),

    //Material

    MatCheckboxModule,
    NoopAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
   MatInputModule,
   MatStepperModule,
   MatTabsModule,
   MatRadioModule,
   MatSelectModule,
   PortalModule,
   MatTableModule,
   MatToolbarModule,
   MatSidenavModule,
   SidebarModule,
   MatProgressBarModule,
   MatListModule,
   ReactiveFormsModule,
   MatMenuModule,
   FormsModule,
   MatCardModule,
   LayoutModule,
   MatTableModule,
   MatSnackBarModule,
   MatMenuModule,
   MatDialogModule






  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'checked'}],
  bootstrap: [AppComponent],

})
export class AppModule { }
