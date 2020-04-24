import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/navtabs/navtabs.module').then( m => m.NavtabsPageModule)
  },
  // {
  //   path: 'pictures',
  //   loadChildren: () => import('./pages/pictures/pictures.module').then( m => m.PicturesPageModule)
  // },
  // {
  //   path: 'catfacts',
  //   loadChildren: () => import('./pages/catfacts/catfacts.module').then( m => m.CatfactsPageModule)
  // },
  // {
  //   path: 'favourites',
  //   loadChildren: () => import('./pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
