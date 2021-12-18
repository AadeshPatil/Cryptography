import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { retry } from 'rxjs-compat/operator/retry';
import { AuthService } from '../../_services/auth.service';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-text-enc',
  templateUrl: './text-enc.component.html',
  styleUrls: ['./text-enc.component.css']
})
export class TextEncComponent implements OnInit {
  userDetils: any;
  txtEncForm: FormGroup;
  userDetilsShow: boolean = false;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.txtEncForm = this.formBuilder.group({
      text: ['', Validators.required],
      userId: ['', Validators.required],
      key: ['', Validators.required],
    });

    var time = new Date();
  }

  getUserDetails() {
    let userId = this.txtEncForm.value.userId;
    if (userId == "") {
      alert("Please Enter the userId");
      this.userDetilsShow = false;
      return;
    }
    this.dataService.getUserDetails(userId).subscribe(data => {
      this.userDetils = data;
      if (this.userDetils.length == 0) {
        this.userDetilsShow = false;
        alert("Please Enter Valid User ID");
      } else {
        this.userDetilsShow = true;
        this.userDetils = data;
      }
    });
  }

  onSubmit() {
    console.log(this.txtEncForm);
    let currentDateTime = moment().format("MM/DD/YYYY hh:mm:ss");

    var controls = this.txtEncForm.controls;
    var Obj = {
      text: controls.text.value,
      key: controls.key.value,
      userId: controls.userId.value,
      time: currentDateTime,
      senderName: localStorage.getItem('userName_TOKEN'),

    };
    if (this.txtEncForm.invalid) {
      alert("Invalid input, please fill all the required fields correctly");
      return;
    } else {
      this.dataService.getUserDetails(Obj.userId).subscribe(data => {
        this.userDetils = data;
        if (this.userDetils.length == 0) {
          this.userDetilsShow = false;
          alert("Please Enter Valid User ID");
        } else {
          if (confirm("Are you sure you want to send the message to " + Obj.userId + " .")) {
            console.log(Obj);
            this.dataService.encText(Obj).subscribe((res: any) => {
              if (res) {
                alert("Done 👍. Message Send SuccessFully !");
                this.userDetilsShow = false;
              };
            });
          }
        }
      });
    }
  }

}
