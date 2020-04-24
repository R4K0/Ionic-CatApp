import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavtabsPage } from './navtabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: NavtabsPage,
    children: [
      {
        path: 'catfacts',
        loadChildren: () => import("../catfacts/catfacts.module").then( m => m.CatfactsPageModule )
      },
      {
        path: 'favourites',
        loadChildren: () => import("../favourites/favourites.module").then( m => m.FavouritesPageModule )
      },
      {
        path: 'pictures',
        loadChildren: () => import("../pictures/pictures.module").then( m => m.PicturesPageModule )
      }
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/pictures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavtabsPageRoutingModule {}
