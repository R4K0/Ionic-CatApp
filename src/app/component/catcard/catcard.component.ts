import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { IonContent } from "@ionic/angular";

@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.scss'],
})
export class CatcardComponent{
  @Input()
  ParentView: IonContent;

  @Input()
  breeds: Array<Object[]>;

  @Input()
  picURL: String;

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
