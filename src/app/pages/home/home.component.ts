import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FullCalendarComponent,
  CalendarOptions,
  Calendar,
} from '@fullcalendar/angular';

import { formatDate } from '@fullcalendar/angular';
import { CommonApiService } from 'src/app/services/common-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageVideoData!: any[];
  eventDetails!: any[];

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    // initialView: 'dayGridMonth',
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    // events: []
  };
  // { title: 'event 1', date: '2022-12-06'},
  // { title: 'event 2', date: '2022-12-07'},

  constructor(private commonSer: CommonApiService) {}

  ngOnInit(): void {
    this.commonSer.getImageVideo().subscribe((res: any) => {
      this.imageVideoData = res;
      console.log(this.imageVideoData);
    });
    this.eventData();
  }

  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }

  eventData() {
    this.commonSer.getEventDetails().subscribe((res: any) => {
      this.eventDetails = res;
      let event:any = [];
      this.eventDetails.forEach((res) => {
        event.push({
          title:res.name + " " + res.type ,
          date: res.birthday_date,
        });
      });
      console.log("sssssssssssssssss",event);
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), // bind is important!
        events: event,
      };

      console.log(this.eventDetails);
    });
  }

  handleDateClick(arg: { dateStr: string }) {
    alert('You Clicked Date ' + arg.dateStr);
  }
}
