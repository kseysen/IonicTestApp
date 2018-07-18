import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PiloteService {
  baseUrl: string = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  public getPilotesFromServer() {
    return this.httpClient
      .get<any[]>('http://localhost:3000/pilotes');
  }

  public editPilotes(data) {
    const pilote = JSON.stringify(data);
    console.log(data);
    console.log(pilote);
    return this.httpClient.put('http://localhost:3000/pilotes/' + data._id, data);
  }
}           