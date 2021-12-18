import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { DataService } from '../../_services/data.service';
@Component({
  selector: 'app-text-decrypt',
  templateUrl: './text-decrypt.component.html',
  styleUrls: ['./text-decrypt.component.css']
})
export class TextDecryptComponent implements OnInit {
  dcrptObj: any;
  dcrptMsgForm: FormGroup;
  showMsg = false;
  secreatMsg: any;
  ipAddress: any;
  constructor(private authService: AuthService, private dataService: DataService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.getIPAddress();
    this.dcrptObj = this.authService.getMsg();
    this.dcrptMsgForm = this.formBuilder.group({
      text: ['', Validators.required],
      key: ['', Validators.required],
    });
 
  }
  onSubmit(){
    if(this.dcrptObj == "" || this.dcrptObj == null || this.dcrptObj == undefined){
      alert("Something went Wrong please try again");
      return;
    }
    var controls = this.dcrptMsgForm.controls;
    var Obj = {
      text: this.dcrptObj.encryptedData,
      key: controls.key.value,
    };
    this.dataService.dcrptTxt(Obj).subscribe(res => {
      let data = res.body['txt'];
    if(data == ""|| data == null ||data == undefined ){
      alert("Please check the key you enterd !")
    }else{
      this.showMsg = true;
      this.secreatMsg = data;
      this.dcrptMsgForm.controls['text'].setValue(this.secreatMsg);
    }
    })

  }

  getIPAddress(){
  }
}


