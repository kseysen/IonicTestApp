import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SurfaceService {
  baseUrl: string = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  public getSurfacesFromServer() {
    return this.httpClient
      .get<any[]>('http://localhost:3000/surfaces');
  }
}           