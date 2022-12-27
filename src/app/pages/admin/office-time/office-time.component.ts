import { Router } from '@angular/router';
import { User } from './../../../interface/interface';
import { CommonService } from 'src/app/services/common.service';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/shared/animations/route-animation';

@Component({
  selector: 'app-office-time',
  templateUrl: './office-time.component.html',
  styleUrls: ['./office-time.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class OfficeTimeComponent implements OnInit {
  timeCount!: any[];
  EmployeeCode!: any;
  officeHour!: number;
  officeMin!: number;
  totalMin!: any;

  totalHour!: any;
  data!: any;

  constructor(
    private commonApiService: CommonApiService,
    private commonService: CommonService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.timeDetails();
    this.userInfo();
  }

  // function filterByString(data, s) {
  //   return data.filter(e => e.id.includes(s) || e.taskname.includes(s))
  //       .sort((a,b) => a.id.includes(s) && !b.id.includes(s) ? -1 : b.id.includes(s) && !a.id.includes(s) ? 1 :0);
  // }
  // console.log(filterByString(data, "ch"));

  timeDetails() {
    this.commonApiService.userTime().subscribe((res: any) => {
      const userDetails: any = localStorage.getItem('hrm-user');
      if (JSON.parse(userDetails).role === 'super_admin') {
        this.timeCount = res;
        for (let i = 0; i < this.timeCount.length; i++) {
          this.data = this.getDataDiff(
            new Date(this.timeCount[i].timeIn),
            new Date(this.timeCount[i].timeOut)
          );
          this.officeHour = this.data.hour - 1;
          this.officeMin = this.data.minute;
          this.timeCount[i]['totalMin'] = this.officeMin;
          this.timeCount[i]['totalHour'] = this.officeHour;
        }
      } else if (JSON.parse(userDetails).role === 'Team-leader') {
        this.timeCount = res.filter((ele: any) => ele.department === 'angular');

        for (let i = 0; i < this.timeCount.length; i++) {
          this.data = this.getDataDiff(
            new Date(this.timeCount[i].timeIn),
            new Date(this.timeCount[i].timeOut)
          );
          this.officeHour = this.data.hour - 1;
          this.officeMin = this.data.minute;
          this.timeCount[i]['totalMin'] = this.officeMin;
          this.timeCount[i]['totalHour'] = this.officeHour;
        }
      } else if (JSON.parse(userDetails).role === 'Employee') {
        this.timeCount = res.filter(
          (ele: any) => ele.userId === JSON.parse(userDetails).id
        );

        for (let i = 0; i < this.timeCount.length; i++) {
          this.data = this.getDataDiff(
            new Date(this.timeCount[i].timeIn),
            new Date(this.timeCount[i].timeOut)
          );
          this.officeHour = this.data.hour - 1;
          this.officeMin = this.data.minute;
          this.timeCount[i]['totalMin'] = this.officeMin;
          this.timeCount[i]['totalHour'] = this.officeHour;
        }
      }
    });
  }

  userInfo() {
    // code for user employee code ===>

    this.commonService.userDetails().subscribe((user: User) => {
      this.EmployeeCode = user.employeeDetail.employee_code;
    });
  }

  getDataDiff(startDate: any, endDate: any) {
    var diff = endDate.getTime() - startDate.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;
    var minutes =
      Math.floor(diff / (60 * 1000)) - (days * 24 * 60 + hours * 60);
    var seconds =
      Math.floor(diff / 1000) -
      (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);
    return { day: days, hour: hours, minute: minutes, second: seconds };
  }

  viewDetails(id:number) {
    this.route.navigate([`/admin/view-details/${id}`]);
  }
}
