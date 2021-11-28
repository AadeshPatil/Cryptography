import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
})
export class AppHeader implements AfterViewInit {
  origEffort : String = '75';
  workHr : String = ' (Working Hours 5 days/week))';
  daysPassed : number;
  userName : String = "";
  startDate : Date = new Date('05/03/2021');
  endDate : Date = new Date()
  constructor(private authService: AuthService
  ) { }


  ngOnInit() {
    this.userName=this.authService.getUserNameToken(); 
    //var endDate = new Date('07/28/2021');
    ;
    var numOfDates = this.getBusinessDatesCount(this.startDate,this.endDate);
    //var numOfDates = this.workingDaysBetweenDates(startDate,endDate);
    //console.log(numOfDates)
    this.daysPassed=numOfDates;
  }
  ngAfterViewInit()  {
  }
  
  logout(){
    this.authService.logout();
  }

  getBusinessDatesCount(startDate, endDate) {
    let count = 0;
    const curDate = new Date(startDate.getTime());
    while (curDate <= endDate) {
        const dayOfWeek = curDate.getDay();
        //console.log("Date : "+curDate+" dayOfWeek : "+dayOfWeek)
        if(!(dayOfWeek in [0,6])) count++; 
        curDate.setDate(curDate.getDate() + 1);
    }
    //alert(count);
    return count;
}

}
