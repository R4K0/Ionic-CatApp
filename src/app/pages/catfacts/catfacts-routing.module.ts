import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatfactsPage } from './catfacts.page';

const routes: Routes = [
  {
    path: '',
    component: CatfactsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatfactsPageRoutingModule {}
