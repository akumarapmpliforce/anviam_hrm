import { CommonService } from "./../../services/common.service";
import { Component, OnInit ,ViewChild } from "@angular/core";
import { FullCalendarComponent,CalendarOptions } from '@fullcalendar/angular';

import { formatDate } from '@fullcalendar/angular';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  imageVideoData!: any[];
  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

 
  constructor(private commonSer: CommonService) {}

  ngOnInit(): void {
    this.commonSer.getImageVideo().subscribe((res: any) => {
      this.imageVideoData = res;
      console.log(this.imageVideoData);
      
    });
  }

  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  }

}
