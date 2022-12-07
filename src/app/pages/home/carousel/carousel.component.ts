import { CommonApiService,  } from '../../../services/common-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselData! : any[];

  constructor(private commonService:CommonApiService) { }

  ngOnInit(): void {
    this.commonService.getImageVideo().subscribe((res:any)=>{
      this.carouselData = res;
    })
  }

}
