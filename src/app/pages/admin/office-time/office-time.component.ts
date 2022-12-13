import { EmployeeDetail, User } from './../../../interface/interface';
import { CommonService } from 'src/app/services/common.service';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-office-time',
  templateUrl: './office-time.component.html',
  styleUrls: ['./office-time.component.scss']
})
export class OfficeTimeComponent implements OnInit {

  timeCount!:any[];
  EmployeeCode!: any;
  officeHour! : number;
  officeMin! : number;  
  totalMin!: any;

  totalHour! : any;
  data!:any;

  constructor(private commonApiService:CommonApiService,
    private commonService:CommonService) { }

  ngOnInit(): void {
    this.timeDetails();
    this.userInfo();
  }

  timeDetails(){
    this.commonApiService.userTime().subscribe((res:any)=>{
      this.timeCount = res;
      
     for(let i = 0;i<this.timeCount.length ;i++){
      this.data = this.getDataDiff(new Date(this.timeCount[i].timeIn),new Date(this.timeCount[i].timeOut));
      this.officeHour = this.data.hour-1;
      this.officeMin = this.data.minute;
      this.timeCount[i]['totalMin'] = this.officeMin;
      this.timeCount[i]['totalHour'] = this.officeHour;
     }

      // let data = this.getDataDiff(this.timeCount[0].timeIn,this.timeCount[0].timeOut);


      // let data = this.getDataDiff(new Date(this.timeCount[3].timeIn),new Date(this.timeCount[3].timeOut));
      // console.log(data.hour);
      // this.officeHour = data.hour-1;
      
    })


    // res.forEach((ele: any) => {
    //   if (
    //     ele.email == this.loginForm.value.email &&
    //     ele.password == this.loginForm.value.password
    //   )


    // var inputJSON = {
    //   "created_date": "2017-04-13 10:12:12",
    //   "current_time": "2017-04-14 12:10:46"
    //   "current_time": "2022-04-04T10:13:54.000000Z"
    // }
    
    // var diff = getDataDiff(new Date(inputJSON.created_date), new Date(inputJSON.current_time));
    
  }

  userInfo(){

    // code for user employee code ===>

    this.commonService.userDetails().subscribe((user: User) => {
      this.EmployeeCode = user.employeeDetail.employee_code;
    })
  }


  getDataDiff(startDate:any,endDate:any) {
    var diff = endDate.getTime() - startDate.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return { day: days, hour: hours, minute: minutes, second: seconds };
  }
  
}
