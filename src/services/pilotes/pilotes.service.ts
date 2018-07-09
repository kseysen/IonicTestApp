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
}