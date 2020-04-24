import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactfetcherService {

  constructor(private HttpClient: HttpClient) { }
  
  getCatFact():Observable<any>{
    return this.HttpClient.get("https://catfact.ninja/fact");
  }

  getCatPicture():Observable<any>{
    return this.HttpClient.get("https://api.thecatapi.com/v1/images/search")
  }
}
