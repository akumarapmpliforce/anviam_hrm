import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profileData: any;
  user_name!:string;
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.common.userDetails().subscribe((res: any) => {
      this.profileData = res;
      this.user_name = res.first_name + ' ' + res.last_name
    });
  }
}
