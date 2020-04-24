import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage/"

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favouriteFacts: String[] = new Array<String>();
  constructor(private storage:Storage) { }

  addToFavourites(fact: String){
    let foundIndex: number = this.favouriteFacts.indexOf(fact);

    if(foundIndex != -1){
      this.favouriteFacts.splice(foundIndex, 1);
    }else{
      this.favouriteFacts.push(fact);
    }

    this.storage.set( "favourites", JSON.stringify(this.favouriteFacts));
  }

  isFavourite(fact: String){
    return this.favouriteFacts.indexOf(fact) != -1
  }

  restoreFavourites(){
    this.storage.get("favourites").then(data => {
      if(data==null){
        return;
      }
      this.favouriteFacts = JSON.parse(data);
    })
  }
}
