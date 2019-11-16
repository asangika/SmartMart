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
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { PromoAddComponent } from './promo-add/promo-add.component';
import { PromoDeleteComponent } from './promo-delete/promo-delete.component';
import { PromoUpdateComponent } from './promo-update/promo-update.component';
import { PromoViewComponent } from './promo-view/promo-view.component';
import { DropdownComponent } from './dropdown/dropdown.component';
 

const routes: Routes = [
   {path: ' ', component: LoginComponent},
  {path: 'dropdown', component:DropdownComponent},
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
  {path: 'product-search', component:ProductSearchComponent},
  {path: 'stock-update', component:StockUpdateComponent},
  {path: 'promo-add', component:PromoAddComponent},
  {path: 'promo-delete', component:PromoDeleteComponent},
  {path: 'promo-update', component:PromoUpdateComponent},
  {path: 'promo-view', component:PromoViewComponent}
      
    
  
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
ProductViewComponent, ProductSearchComponent,StockUpdateComponent,PromoAddComponent, PromoViewComponent,
PromoDeleteComponent,PromoUpdateComponent,DropdownComponent]
