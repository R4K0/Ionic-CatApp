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
    return this.HttpClient.get("https://api.thecatapi.com/v1/images/search", { headers: {
      "x-api-key": "3e5a6310-d99c-474b-ae03-cc1b9fa8f7e8"
    } })
  }
}
