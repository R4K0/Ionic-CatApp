import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatfactComponent } from '../../component/catfact/catfact.component';
import { CatcardComponent } from "../../component/catcard/catcard.component";
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

/*
I had to create a new module that I later import into my used pages because of one very important reason:

1 Component cannot be used as a declaration in two different pages, therefore this forces me to use a "merger" module that declares it and uses it as an export
so I can just import this module into pages that need the component.

TLDR: Modules can be imported everywhere however many times you can, components can be declared only once - therefore put component into the module to use it more than in two places.
*/


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
