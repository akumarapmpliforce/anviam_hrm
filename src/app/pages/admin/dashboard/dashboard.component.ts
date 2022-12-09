import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/interface/interface';
import { CommonService } from 'src/app/services/common.service';
import { fadeInAnimation } from 'src/app/shared/animations/route-animation';
import {
  FullCalendarComponent,
  CalendarOptions,
  Calendar,
} from '@fullcalendar/angular';
import { CommonApiService } from 'src/app/services/common-api.service';
import tippy from 'tippy.js';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  eventDetails!: any[];
  user!: User;
  user_name!: string;
  dataDetailsUser!: any[];
  birth!:string;
  department!: string;
  gender!:string;
  office_location!: string;
  employee_status!:string;
  employee_for!:any;
  employee_code!:string;
  employee_age!:any;
  age:any;

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {};

  constructor(
    private common: CommonService,
    private commonSer: CommonApiService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.common.userDetails().subscribe((user: User) => {
      console.log(user);
      this.birth = user.employeeDetail.date_of_birth;
      this.department = user.employeeDetail.department;
      this.gender = user.employeeDetail.gender;
      this.office_location = user.employeeDetail.office_location;
      this.employee_status = user.employeeDetail.employee_status;
      this.employee_for = this.calculate(user.employeeDetail.date_of_joining);
      this.employee_code = user.employeeDetail.employee_code; 
      this.age = this.calculate(user.employeeDetail.date_of_birth);
      this.user = user;
      this.user_name = user.first_name + ' ' + user.last_name;
    });
    this.eventData();
    this.dataDetails();
  }

  calculate(date:any){
    var dob = new Date(date);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age
  }

  dataDetails(){
    this.commonSer.dataDetails().subscribe((res:any)=>{
      this.dataDetailsUser = res;
      
    })
  }

  anviam(){
    this.router.navigate(["https://www.google.com/"]);
  }

  


  someMethod() { 
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }

  eventData() {
    this.commonSer.getEventDetails().subscribe((res: any) => {
      this.eventDetails = res;
      let event: any = [];
      this.eventDetails.forEach((res) => {
        event.push({
          title: res.name + ' ' + res.type,
          date: res.birthday_date,
        });
      });
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), // bind is important!
        events: event,
        eventDidMount: (info) => {
          tippy(info.el, {
            content: info.event.title,
          });
        },
      };
    });
  }

  
  handleDateClick(arg: { dateStr: string }) {
    alert('You Clicked Date ' + arg.dateStr);
  }
 
  
  
}