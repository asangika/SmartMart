import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { MainNavComponent} from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserSearchComponent } from './user-search/user-search.component';
import {UserRegComponent}from './user-reg/user-reg.component';
import {UserDeleteComponent}from './user-delete/user-delete.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { PromoAddComponent } from './promo-add/promo-add.component';
import { PromoDeleteComponent } from './promo-delete/promo-delete.component';
import { PromoUpdateComponent } from './promo-update/promo-update.component';
import { PromoViewComponent } from './promo-view/promo-view.component';
 

 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserUpdateComponent,
    UserViewComponent,
    UserSearchComponent,
    UserRegComponent,
    UserDeleteComponent,
    ProductAddComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    ProductViewComponent,
    ProductSearchComponent,
    StockUpdateComponent,
    PromoAddComponent,
    PromoDeleteComponent,
    PromoUpdateComponent,
    PromoViewComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path:'login', component:LoginComponent},
      {path:'main-nav', component:MainNavComponent},
      {path: 'user-reg', component: UserRegComponent},
      {path: 'user-delete', component: UserDeleteComponent},
      {path: 'user-update', component:UserUpdateComponent},
      {path: 'user-view', component:UserViewComponent},
      {path: 'user-search', component: UserSearchComponent},
      {path: 'product-add', component:ProductAddComponent},
      {path: 'product-delete', component:ProductDeleteComponent},
      {path: 'product-update', component:ProductUpdateComponent},
      {path: 'product-view', component:ProductViewComponent},
      {path: 'product-search', component:ProductSearchComponent},
      {path: 'stock-update', component:StockUpdateComponent},
      {path: 'promo-add', component:PromoAddComponent},
      {path: 'promo-delete', component:PromoDeleteComponent},
      {path: 'promo-update', component:PromoUpdateComponent},
      {path: 'promo-view', component:PromoViewComponent}
    ]),
      
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {ɵɵdefineInjectable: any }
