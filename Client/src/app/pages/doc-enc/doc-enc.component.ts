import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { file } from 'jszip';
import * as moment from 'moment';
import { HelperService } from '../../_services/helper.service';
import { DataService } from '../../_services/data.service';


@Component({
  selector: 'app-doc-enc',
  templateUrl: './doc-enc.component.html',
  styleUrls: ['./doc-enc.component.css']
})

export class DocEncComponent  implements OnInit {
  userDetils: any;
  imgEncForm: FormGroup;
  userDetilsShow: boolean = false;
  selectedFile : File;
  userChoice = true;
  sendMsg: boolean = true;
  encrptImg: boolean = false;
  userAction: any;

  constructor(private dataService: DataService, private formBuilder: FormBuilder ,private plugAndPlay:HelperService) { }

  ngOnInit() {
    this.imgEncForm = this.formBuilder.group({
      file: [file, Validators.required],
      userId: [''],
      key: ['', Validators.required],
    });
  }

  getUserDetails() {
    let userId = this.imgEncForm.value.userId;
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
    let currentDateTime = moment().format("MM/DD/YYYY hh:mm:ss");

    var controls = this.imgEncForm.controls;
    var Obj = {
      key: controls.key.value,
      userId: controls.userId.value,
      time: currentDateTime,
      senderName: localStorage.getItem('userName_TOKEN'),

    };
    if (this.imgEncForm.invalid) {
      alert("Invalid input, please fill all the required fields correctly");
      return;
    } else {
      this.dataService.getUserDetails(Obj.userId).subscribe(data => {
        this.userDetils = data;
        if (this.userDetils.length == 0) {
          this.userDetilsShow = false;
          alert("Please Enter Valid User ID");
        } else {
          if(this.userAction == "sendMsg"){
            if (confirm("Are you sure you want to send the message to " + Obj.userId + " .")) {
              this.encData(this.selectedFile,Obj.key,Obj.senderName);
            }
          }else{
            this.sendEncData(this.selectedFile,Obj.key,Obj.senderName,Obj.userId,Obj.time,"PDF");

          }
        }
      });
    }
  }
  sendEncData(selectedFile: File, key: any, senderName: string, userId: any,time:any,filetype:any) {
    var data = new FormData();
    data.append("key", key);
    data.append("file", selectedFile[0], selectedFile[0].name);
    data.append("sender", senderName);
    data.append("reciver", userId);
    data.append("time", time);
    data.append("fileType",filetype);
    this.dataService.sendEncImage(data).subscribe(res => {
      if(res){
        alert("Message Send Succefully !")
      } 
    }, error => {
      console.log(error);
    });
  }

  onChnageFile(file){
    this.selectedFile = file;

  }

  encData(fileInput,key,senderName){

    var data = new FormData();
    data.append("key", key);
    data.append("sender", senderName);
    data.append("file", fileInput[0], fileInput[0].name);
    this.dataService.encImage(data).subscribe(res => {
      if(res){
        this.plugAndPlay.downloadRestFile(res);
      } 
    }, error => {
      console.log(error);
    });
  }
  
  setUserChoice(userChoice){
    this.userChoice = true;
    this.userAction = userChoice;
    if(userChoice == 'sendMsg'){
      this.sendMsg = true;
      this.encrptImg = false;
    }else if(userChoice == 'encrptImg'){
      this.encrptImg = true;
      this.sendMsg = false;
    }
  }
}
