import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/services/common-api.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  viewDetails!:any[];
  timeDetails!:any[];

  constructor(private route : Router,private commonServices : CommonApiService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.viewDetailData();
  }

  backButton(){
    this.route.navigate(['/admin/time-count']);

  }

  viewDetailData(){
    const prodId = this.activateRoute.snapshot.paramMap.get('id');
    this.commonServices.userTime().subscribe((res:any)=>{
      if(res){
        this.viewDetails = res.filter((ele:any) => ele.id == prodId); 
        console.log(this.viewDetails[0].time);
        this.timeDetails = this.viewDetails[0].time;
        console.log(this.timeDetails);
      }
    })
  }
}
