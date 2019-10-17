import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegComponent } from './user-reg/user-reg.component';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserRegComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'admin', component:AdminComponent},
      {path:'login', component:LoginComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
