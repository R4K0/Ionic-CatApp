import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicturesPageRoutingModule } from './pictures-routing.module';

import { PicturesPage } from './pictures.page';
import { CatModule } from "../../modules/cat-module/cat-module.module"


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicturesPageRoutingModule,
    CatModule,
  ],
  declarations: [PicturesPage]
})
export class PicturesPageModule {}
