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

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {};

  constructor(
    private common: CommonService,
    private commonSer: CommonApiService
  ) {}

  ngOnInit(): void {
    this.common.userDetails().subscribe((user: User) => {
      this.user = user;
      this.user_name = user.first_name + ' ' + user.last_name;
      console.log(user);
    });
    this.eventData();
  }

  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }

  eventData() {
    this.commonSer.getEventDetails().subscribe((res: any) => {
      console.log(res);

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