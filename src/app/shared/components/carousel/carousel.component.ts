import { CommonService } from '../../../services/common.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() carouselData!: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.carouselData);
    }, 1000);
    this.data();
    
  }

  data() {

    // debugger
  }
}
