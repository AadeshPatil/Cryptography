import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataserviseService } from 'src/app/service/dataservise.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  userRegForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dataService:DataserviseService ,) { }

  ngOnInit() {

     this.userRegForm = this.formBuilder.group({
      id: [''],
      userId: [''],
      password: [''],
      name: [''],
      recheckPw: ['']
    });
  }
  createNewUser(){
      var controls = this.userRegForm.controls;
      var newUser = {
        id: controls.id ? controls.id.value : null,
        userId: controls.userId.value,
        password: controls.password.value,
        name: controls.name.value,
        recheckPw: controls.recheckPw.value,
      };
  
     
      if(newUser.password != newUser.recheckPw){
        alert('Password must be same')
      }else{
        delete newUser.recheckPw;
        console.log(newUser);
          this.dataService.addUser(newUser).subscribe((res: any)=>{
           alert("New User Saves Successfully !")
          });
      }
      
  }
}
