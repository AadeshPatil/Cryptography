import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviseService } from 'src/app/service/dataservise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList: any;
  userLoginForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private dataService:DataserviseService) { }

  ngOnInit() {
    this.loadBaseData();
    this.userLoginForm = this.formBuilder.group({
      userId: [''],
      password: [''],
    });
  }

  loadBaseData(){
    this.dataService.getAllUsers().subscribe((userObj)=>{
      this.userList = userObj;
      console.log('userLIst' + this.userList);
     });
  }


  onLogin(){
    var controls = this.userLoginForm.controls;
    var userLogin = {
      userId: controls.userId.value,
      password: controls.password.value,
    };

    this.userList.forEach(element => {
      if(element.userId !=userLogin.userId && element.password != userLogin.password){
          alert('Invalid Crediantials');
          return;
      }else{
        alert('Login Succefull')
        return
      }
      
    });

   
  }


}
