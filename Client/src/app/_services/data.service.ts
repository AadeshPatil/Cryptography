import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'

export interface storeCaseResp {
  statusCode: any;
  obj: any;
  status: string
}

@Injectable()
export class DataService {
  
  constructor(private http: HttpClient) { }
  
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'X-Auth-Token', }) }
  api = "http://localhost:8080";
  
  updSubCity(subCityObj){
    return this.http.post(`${config.apiUrl}/updSubCity`, subCityObj, { observe: 'response' });
  }
}
