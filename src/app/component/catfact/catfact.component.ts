import { Component, OnInit, Input } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-catfact',
  templateUrl: './catfact.component.html',
  styleUrls: ['./catfact.component.scss'],
})
export class CatfactComponent{
  @Input() content: String = "";
  @Input() ID: number = 0;


  constructor(private fService: FavouritesService) {}

  addToFavourites(){
    this.fService.addToFavourites(this.content);
  }

  isFavourite(): boolean{
    return this.fService.isFavourite(this.content)
  }
}
