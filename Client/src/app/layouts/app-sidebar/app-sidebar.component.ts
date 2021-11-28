import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {
  userRole: any;
  userPerm: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    var permData;
    this.userRole = this.authService.getUserRoleToken();
    this.authService.fetchPermissionByRoleNm(this.userRole).subscribe((data: any) => {
      this.userPerm  = data.obj;
      this.authService.setPermissionToken(this.userPerm);
    //  console.log("User Permission Data: ",this.userPerm);
    //  console.log("User function result : ",this.userPerm.includes('UserMaster'))
    }, err => {
      if (err.status == 404) {
        /// you can check for any status like 404 not found 
        console.log('Web Service not found');
      }
    });
  }
}
