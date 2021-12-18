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
      fName : ['',Validators.required],
      lName : ['',Validators.required],
      mobileNo : ['',Validators.required],
      password : ['',Validators.required],
      rePassword :['',Validators.required],
      emailId : ['',Validators.required],
      state : [''],
      city : ['',Validators.required],
      completeName : [''],
  });
  }
  onSubmit(){
    
    var controls = this.loginForm.controls;
    if(controls.password.value != controls.rePassword.value){
      alert("Password must be same !");
      return
    }
    var Obj = {
      userId :controls.userId.value,
      fName : controls.fName.value,
      lName : controls.lName.value,
      mobileNo : controls.mobileNo.value,
      password : controls.password.value,
      emailId : controls.emailId.value,
      state : controls.state.value ? controls.state.value :null,
      city : controls.city.value,
      completeName : controls.fName.value + controls.lName.value,
    };
    if (this.loginForm.invalid) {
      alert("Invalid input, please fill all the required fields correctly");
      return;
    } else {
      this.authservices.register(Obj);
    }

  }
}
