import { CommonService } from "./../../services/common.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  imageVideoData!: any[];
  constructor(private commonSer: CommonService) {}

  ngOnInit(): void {
    this.commonSer.getImageVideo().subscribe((res: any) => {
      this.imageVideoData = res;
      console.log(this.imageVideoData);
      
    });
  }
}
