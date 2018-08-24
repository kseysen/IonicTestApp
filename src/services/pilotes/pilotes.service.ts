import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PiloteService {
  baseUrl: string = "https://radiant-anchorage-58124.herokuapp.com/";
  //baseUrl: String = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  public getPilotesFromServer() {
    return this.httpClient
      .get<any[]>(this.baseUrl + 'pilotes');
  }

  public editPilotes(data) {
    const pilote = JSON.stringify(data);
    console.log(data);
    console.log(pilote);
    return this.httpClient.put(this.baseUrl + 'pilotes/' + data._id, data);
  }
}           