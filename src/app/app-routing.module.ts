import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import{AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserSearchComponent } from './user-search/user-search.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductDeleteComponent}from './product-delete/product-delete.component';  
import {ProductUpdateComponent}from './product-update/product-update.component';
import {ProductViewComponent} from './product-view/product-view.component';
import { ProductSearchComponent } from './product-search/product-search.component';

const routes: Routes = [
   
  {path: 'login', component: LoginComponent}, 
  {path: 'main-nav',component: MainNavComponent},
  {path: 'user-reg', component: UserRegComponent},
  {path: 'user-delete', component: UserDeleteComponent},
  {path: 'user-update', component:UserUpdateComponent},
  {path: 'user-view', component:UserViewComponent},
  {path: 'user-search', component: UserSearchComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'product-delete', component: ProductDeleteComponent},
  {path: 'product-update', component: ProductUpdateComponent},
  {path: 'product-view', component:ProductViewComponent},
  {path: 'product-search', component:ProductSearchComponent}
      
    
  
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
export const routingComponents = [LoginComponent, MainNavComponent, UserRegComponent, UserDeleteComponent,
  UserSearchComponent,UserUpdateComponent,ProductDeleteComponent,ProductAddComponent,ProductUpdateComponent,
ProductViewComponent, ProductSearchComponent]
