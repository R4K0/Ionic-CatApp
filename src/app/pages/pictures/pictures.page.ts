import { Component, OnInit, ViewChild } from '@angular/core';
import { FactfetcherService } from '../../services/factfetcher.service'

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.page.html',
  styleUrls: ['./pictures.page.scss'],
})
export class PicturesPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;

  catPics: Object[] = [];

  constructor(private catService: FactfetcherService) { }

  ngOnInit() {
  }
  
  async getPictures(){
    this.content.scrollToBottom(300);

    this.catService.getCatPicture().subscribe( (data) => {
      if(data.length == 1){
        this.catPics.push( data[0] );
      } else {
        data.forEach( object => this.catPics.push( object ));
      }
    }, err => console.log( err ))
  }

}
