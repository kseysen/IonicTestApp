import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SetupService {
  baseUrl: string = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  public getSetupBySurface(data) {
      console.log(data);
    return this.httpClient
      .get<any[]>('http://localhost:3000/setups/' + data.name);
  }

  public editSetup(data) {
    return this.httpClient.put('http://localhost:3000/setups/' + data._id, data);
  }

  public addSetup(data) {
    return this.httpClient.post('http://localhost:3000/setups', data);   
  }

  public deleteSetup(data) {
    return this.httpClient.delete('http://localhost:3000/setups/' + data._id, data);
  }

}           