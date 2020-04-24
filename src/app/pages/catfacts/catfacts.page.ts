import { Component, OnInit, ViewChild } from '@angular/core';
import { FactfetcherService } from "../../services/factfetcher.service"

@Component({
  selector: 'app-catfacts',
  templateUrl: './catfacts.page.html',
  styleUrls: ['./catfacts.page.scss'],
})
export class CatfactsPage implements OnInit {
  static facts: number = 0;
  catFacts: any = [];
  constructor(private CatFact: FactfetcherService) { }

  ngOnInit() {
  }

  loadMore(){
    for (let i = 0; i < 5; i++){
      this.CatFact.getCatFact().subscribe((data)=>{
        CatfactsPage.facts++;
        this.catFacts.push( {
          ID: CatfactsPage.facts,
          content: data.fact
        } );
      })
    }
  }
}
