import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import{AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
 


const routes: Routes = [
   
  {path: 'login', component: LoginComponent}, 
  {
    path: 'main-nav', 
    component: MainNavComponent,
    children: [
      {path: 'userreg', component: UserRegComponent},
      {path: 'userdelete', component: UserDeleteComponent}
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MainNavComponent, UserRegComponent, UserDeleteComponent]
