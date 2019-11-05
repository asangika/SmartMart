import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule,MatToolbarModule,MatSidenavModule, MatMenuModule, MatButtonToggleModule } from '@angular/material' 
import {MatFormFieldModule} from '@angular/material/form-field' 


const MaterialComponent = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule 
   
]
@NgModule({
   
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
