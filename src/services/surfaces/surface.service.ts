import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SurfaceService {
  baseUrl: string = "https://radiant-anchorage-58124.herokuapp.com/";
  //baseUrl: String = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  public getSurfacesFromServer() {
    return this.httpClient
      .get<any[]>(this.baseUrl + 'surfaces');
  }
}           