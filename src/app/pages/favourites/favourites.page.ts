import { Component, OnInit } from '@angular/core';
import { FavouritesService } from "../../services/favourites.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  constructor(private fService:FavouritesService) { }

  ngOnInit() {
  }

  getFavourites():String[]{
    return this.fService.favouriteFacts;
  }

}
