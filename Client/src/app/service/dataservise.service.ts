import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataserviseService {
  
  constructor(private http: HttpClient) { }
    api = "http://localhost:8080";

  addUser(newUser) {
    return this.http.post<any>(`${this.api}/login/addUser`,newUser, { observe: 'response' });
  }

  getAllUsers(){
    return this.http.post<any>(`${this.api}/login/getAllUser`, { observe: 'response' });
  }

}