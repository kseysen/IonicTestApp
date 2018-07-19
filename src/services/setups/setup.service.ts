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
}           