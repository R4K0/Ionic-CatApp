import { Component, OnInit, ViewChild } from '@angular/core';
import { FactfetcherService } from '../../services/factfetcher.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.page.html',
  styleUrls: ['./pictures.page.scss'],
})
export class PicturesPage {
  @ViewChild('content', { static: false }) private content: any;

  catPics: Object[] = [];
  firstEnter: boolean = true;

  constructor(private catService: FactfetcherService, private alertController: AlertController ) { }

  ionViewDidEnter() {
    if(this.firstEnter == false){
      return;
    }

    for(let i = 0; i < 3; i++){
      this.getPictures();
    }

    this.firstEnter = false;
  }
  
  getPictures(){
    this.content.scrollToBottom(300);

    this.catService.getCatPicture().subscribe( (data) => {
        this.catPics.push( data[0] );

        if(data[0].breeds[0] != null){
          /*
          Couldn't figure out how to do it inside ngFor (split), and I don't know how to write my own pipe for ngFor so I'm doing it this way.
          */

          data[0].splitbreeds = data[0].breeds[0].temperament.split( ', ');
        }
    }, err => console.log( err ))
  }

  async showInfo(){
    const infoAlert = await this.alertController.create({
      header: "Credits",
      subHeader: "Application created by G00376658 (Milosz Milewski)",
      message: `
      <p>
        APIs used:
        <br>
        <strong>catfact.ninja</strong>
        <br>
        <strong>thecatapi.com</strong>

        <br><br>
        Application created as a part of Mobile Development module @ GMIT

        <br><br>
        Technologies used: Ionic & Angular
      <p>
      `,
      buttons: ['Gotcha!']
    })
    
    await infoAlert.present();
  }

}
