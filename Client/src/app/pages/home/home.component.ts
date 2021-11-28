import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
 
  ngOnInit() {

   
}
}
