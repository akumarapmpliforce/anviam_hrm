import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import { CommonApiService } from 'src/app/services/common-api.service';
import tippy from 'tippy.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageVideoData!: any[];
  eventDetails!: any[];
  birthday_Event: any;
  anniversary_Event: any = [];
  celebration_Event: any = [];
  month_Event: any = [];

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {};

  constructor(private commonSer: CommonApiService) {}

  ngOnInit(): void {
    this.commonSer.getImageVideo().subscribe((res: any) => {
      this.imageVideoData = res;
      let birthday: any = [];
      let anniversary: any = [];
      let celebration: any = [];
      let month: any = [];

      this.imageVideoData.forEach((res) => {
        birthday.push(res.birthday_Event);
        anniversary.push(res.anniversary);
        celebration.push(res.celebration);
        month.push(res.month);
      });
      (this.birthday_Event = {
        id: 'birthdayEvent',
        data: birthday,
      }),
        (this.anniversary_Event = {
          id: 'anniversaryEvent',
          data: anniversary,
        }),
        (this.celebration_Event = {
          id: 'celebrationEvent',
          data: celebration,
        }),
        (this.month_Event = {
          id: 'monthEvent',
          data: month,
        }),
        console.log('this.birthday_Event', this.birthday_Event);
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
