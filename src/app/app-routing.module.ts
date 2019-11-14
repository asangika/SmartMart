import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RechargeComponent } from './recharge/recharge.component';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'recharge', component: RechargeComponent}, 
  {path: 'wallet-create', component: WalletCreateComponent},   
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
