import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/interface';
import { CommonService } from 'src/app/services/common.service';
import { fadeInAnimation } from 'src/app/shared/animations/route-animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user!: User;
  user_name!: string;
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.common.userDetails().subscribe((user: User) => {
      this.user = user;
      this.user_name = user.first_name + ' ' + user.last_name;
      console.log(user);
    });
  }
}
