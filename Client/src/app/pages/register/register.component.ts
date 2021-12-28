import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../_services/helper.service';
import { DataService } from '../../_services/data.service';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authservices : AuthService,private dataService: DataService, private formBuilder: FormBuilder ,private plugAndPlay:HelperService) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userId: ['',Validators.required],
      mobileNo : ['',Validators.required],
      password : ['',Validators.required],
      rePassword :['',Validators.required],
      checkBox :['',Validators.required],
      emailId :['',Validators.required]
  });
  }
  onSubmit(){
    if(this.loginForm.controls.checkBox.value == false){
      alert("Please Accpet the terms and conditions.")
    }
    
    var controls = this.loginForm.controls;
    if(controls.password.value != controls.rePassword.value){
      alert("Password must be same !");
      return
    }
    var Obj = {
      userId :controls.userId.value,
      mobileNo : controls.mobileNo.value,
      password : controls.password.value,
      
        emailId :controls.emailId.value,
        role : "user",
        userType : "user",
    
    };
    if (this.loginForm.invalid) {
      alert("Invalid input, please fill all the required fields correctly");
      return;
    } else {
      this.authservices.register(Obj);
    }

  }
}
