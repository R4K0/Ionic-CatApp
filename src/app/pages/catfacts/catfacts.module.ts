import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatfactsPageRoutingModule } from './catfacts-routing.module';
import { CatfactsPage } from './catfacts.page';
import { CatModule } from '../../modules/cat-module/cat-module.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatfactsPageRoutingModule,
    CatModule
  ],
  declarations: [CatfactsPage]
})
export class CatfactsPageModule {}
