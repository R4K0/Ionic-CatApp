import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { IonContent } from "@ionic/angular";

@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.scss'],
})

/*
  Component for the picture card, I pass in the parent view via property binding from the pictures page so I can use the
  finishedLoading callbacks of ion-img to scroll down the page when content is loaded.
  
  ion-img only loads when the picture is in-view.
*/

export class CatcardComponent{
  @Input()
  ParentView: IonContent;

  @Input()
  breeds: Array<Object[]>;

  @Input()
  picURL: String;

  @Input()
  personality: String[];

  isLoading: boolean = false;

  constructor() {}

  finishedLoading(){
    this.isLoading = false;


    if( this.ParentView == null ){
      return;
    }

    this.ParentView.scrollToBottom(200)
  }

  startLoading(){
    this.isLoading = true;

    if( this.ParentView == null ){
      return;
    }

    this.ParentView.scrollToBottom(200)    
  }
}
