import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselData! : any[];

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getImageVideo().subscribe((res:any)=>{
      console.log(res);
      this.carouselData = res;
    })
  }

}
