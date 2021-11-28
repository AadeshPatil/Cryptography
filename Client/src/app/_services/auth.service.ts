import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { map, catchError, mapTo, tap } from 'rxjs/operators';
import { config } from './config';
import { Tokens } from '../models/tokens';
import { Router } from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable()
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly userRole_TOKEN = 'userRole_TOKEN';
  private readonly userName_TOKEN = 'userName_TOKEN';
  private readonly userPerm_TOKEN = 'userPerm_TOKEN';
  private readonly userNumId_TOKEN = 'userNumId_TOKEN';
  private readonly userAgencyId_TOKEN = 'userAgencyId_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private tokenGeneratedAt = 'tokenGeneratedAt';
  private loggedUser: string;
  
  constructor(private http: HttpClient,  private router: Router,private spinner: NgxSpinnerService) { }



  // onLogin(user){
  //   this.login(user).subscribe(
  //     (resp)=>console.log("response---",resp));
  // }

  login(user){
    return this.http.post(`${config.apiUrl}/login`, user,{observe: 'response'})
    .pipe(
      tap(resp=> {this.doLoginUser(user.username, resp.headers.get('Authorization'),resp.headers.get('UserRole'),resp.headers.get('userId'),resp.headers.get('userNumId'))}), 
      mapTo(true),
      catchError(error => {
        alert("Invalid UserName/Password");
        console.log(error);
        //this.router.navigate(['/login']);
        this.spinner.hide();
        return of(false);
    }));
      // .pipe(
      //   tap(tokens => {console.log("response---",tokens);this.doLoginUser(user.username, tokens)}),
      //   mapTo(true),
      //   catchError(error => {
      //     alert(error.error);
      //     return of(false);
      //   }));
  }

  logout() {
    //console.log("Logout start")
    //this.doLogoutUser();
    // this.http.post(`${config.apiUrl}/doLogout`, {},{observe: 'response'})
    // .pipe(
    //   tap(resp => {this.doLogoutUser()}),
    //   mapTo(true),
    //   catchError(error => {
    //     alert(error.error);
    //     return of(false);
    //   })); 
      //console.log("Logout start 1")
      //this.http.post(`${config.apiUrl}/doLogout`, {},{observe: 'response'}).subscribe((data: any)=>{
        this.doLogoutUser();
        //console.log(this.caseStatDetails);
        this.spinner.hide();
      // }, error => {
      //   this.spinner.hide();
      //   console.log("Logout : "+error);
      // });
  }


  isLoggedIn() {
    return (!!this.getJwtToken() && !this.isTokenExpired());
  }

  isTokenExpired(){
    let expired = true;
    let tokenGeneratedAt = localStorage.getItem(this.tokenGeneratedAt);
    let tokenGeneratioDate = new Date(tokenGeneratedAt);
    let currDate = new Date();
    if(currDate < tokenGeneratioDate){
      expired = !expired;
    }
    return expired;
  }

  private doLoginUser(username: string, bearerToken: string, userRoletoken, userId : string,userNumId : string) {
    this.loggedUser = username;
    var userPerms ="";
    let userDetails;
    // this.fetchPermissionByRoleNm(userRoletoken).subscribe((data: any) => {
    //   userPerms  = data.obj;
    //   //console.log("User Permission Data: ",userPerms);
    // }, err => {
    //   if (err.status == 404) {
    //     /// you can check for any status like 404 not found 
    //     console.log('Web Service not found');
    //   }
    // }); 
    console.log(userId);
    // this.fetchUserDetails(userId).subscribe((data: any) => {
    //   userDetails  = data;
    //   //console.log("User Permission Data: ",userPerms);
    // }, err => {
    //   if (err.status == 404) {
    //     /// you can check for any status like 404 not found 
    //     console.log('Web Service not found for UserD');
    //   }
    // });
    
    this.storeTokens(bearerToken, userRoletoken,username,userPerms,userNumId);
  }

  private doLogoutUser() {
    //console.log("doLogout start")
    this.loggedUser = null;
    this.removeTokens();
  }

  private storeTokens(bearerToken: string, userRoletoken: string, username :string, userPerms :any, userNumId :string) {
    localStorage.setItem(this.JWT_TOKEN, bearerToken);
    localStorage.setItem(this.userRole_TOKEN, userRoletoken);
    localStorage.setItem(this.userName_TOKEN, username);
    localStorage.setItem(this.userPerm_TOKEN, userPerms);
    localStorage.setItem(this.userNumId_TOKEN, userNumId);
    localStorage.setItem(this.userAgencyId_TOKEN, "Dummy");
    
    let date =  new Date();
    //date.setMinutes(1);
    date.setHours(240);
    localStorage.setItem(this.tokenGeneratedAt, date.toDateString());
    //localStorage.setItem(this.JWT_TOKEN, tokens.jwt_toekn);
    //localStorage.setItem(this.REFRESH_TOKEN, tokens.referesh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.userRole_TOKEN);
    localStorage.removeItem(this.userName_TOKEN);
    localStorage.removeItem(this.userPerm_TOKEN);
    localStorage.removeItem(this.userNumId_TOKEN);
    localStorage.removeItem(this.userAgencyId_TOKEN);
    localStorage.removeItem(this.tokenGeneratedAt);
    //localStorage.removeItem(this.REFRESH_TOKEN);
    this.router.navigate(['/login']);
  }

  refreshToken() {
    return this.http.post<any>(`${config.apiUrl}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt_toekn);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  getUserRoleToken() {
    return localStorage.getItem(this.userRole_TOKEN);
  }

  setPermissionToken(userPerms :any) {
    localStorage.setItem(this.userPerm_TOKEN, userPerms);
  }
  getUserPermissionToken() {
    return localStorage.getItem(this.userPerm_TOKEN);
  }

  setUserNumId(userNumId :any) {
    localStorage.setItem(this.userNumId_TOKEN, userNumId);
  }
  getUserNumId() {
    return localStorage.getItem(this.userNumId_TOKEN);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }
  public getUserNameToken() {
    return localStorage.getItem(this.userName_TOKEN);
  }
  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }
  fetchPermissionByRoleId(roleId){
    return this.http.post(`${config.apiUrl}/role/fetchpermNm/${roleId}`, {});
  }
  fetchPermissionByRoleNm(roleName){
    return this.http.post(`${config.apiUrl}/role/fetchpermNmByRoleNm/${roleName}`, {});
  }
  fetchUserDetails(userId){
    return this.http.post(`${config.apiUrl}//users/fetchUId/${userId}`, {});
  }
}
