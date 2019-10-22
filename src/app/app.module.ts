import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { ProductAddComponent } from './product-add/product-add.component';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserRegComponent,
    UserSearchComponent,
    UserViewComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    ProductAddComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
