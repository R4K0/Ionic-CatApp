import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatfactComponent } from '../../component/catfact/catfact.component';
import { CatcardComponent } from "../../component/catcard/catcard.component";
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CatfactComponent, CatcardComponent],
  exports: [
    CatfactComponent,
    CatcardComponent,
  ],
  imports: [
    FormsModule,
    IonicModule,    
    CommonModule
  ]
})
export class CatModule { }
