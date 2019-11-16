import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RechargeComponent } from './recharge/recharge.component';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent}, 
  {path: 'luser-delete', component: UserDeleteComponent},  
  {path: 'recharge', component: RechargeComponent}, 
  {path: 'wallet-create', component: WalletCreateComponent}, 
  {path: 'vieworder', component: VieworderComponent},   
  {path: 'product-add', component: ProductAddComponent},  
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
export const routingComponents = [AdminComponent]
