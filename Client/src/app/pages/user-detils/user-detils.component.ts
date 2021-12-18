import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { DataService } from '../../_services/data.service';
@Component({
  selector: 'app-user-detils',
  templateUrl: './user-detils.component.html',
  styleUrls: ['./user-detils.component.css']
})
export class UserDetilsComponent implements OnInit {
  userNumId: string;
  userDetials :any;
  userDetialForm: any;

  constructor(private authService: AuthService, private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userNumId = localStorage.getItem('userNumId_TOKEN');
    this.dataService.getLogedInUserDetials(this.userNumId).subscribe(data => {
      this.userDetials = data;
    });

    this.userDetialForm = this.formBuilder.group({
      fName:[''],
      lName : [''],
      mobileNo : [''],
      password : [''],
      emailId : [''],
      state : [''],
      city : [''],
      isActive : [''],
      role : [''],
      userId : [''],
      userType : [''],
      fatherName : [''],
      completeName : ['']
    });
  }


  onSubmit(){
    var controls = this.userDetialForm.controls;
    var Obj = {
      fName:controls.fName.value,
      lName : controls.fName.value,
      mobileNo : controls.mobileNo.value,
      password : controls.password.value,
      emailId : controls.emailId.value,
      state : controls.state.value,
      city : controls.city.value,
      isActive : controls.isActive.value,
      role : controls.role.value,
      userId : controls.userId.value,
      userType : controls.userType.value,
      fatherName : controls.fatherName.value,
      completeName : controls.completeName.value
    };

    
  }

}
