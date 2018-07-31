import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SetupService {
  baseUrl: string = "https://radiant-anchorage-58124.herokuapp.com/";
  //baseUrl: String = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  public getSetupBySurface(data) {
      console.log(data);
    return this.httpClient
      .get<any[]>(this.baseUrl + 'setups/' + data.name);
  }

  public editSetup(data) {
    return this.httpClient.put(this.baseUrl + 'setups/' + data._id, data);
  }

  public addSetup(data) {
    return this.httpClient.post(this.baseUrl + 'setups', data);   
  }

  public deleteSetup(data) {
    return this.httpClient.delete(this.baseUrl + 'setups/' + data._id, data);
  }

}           