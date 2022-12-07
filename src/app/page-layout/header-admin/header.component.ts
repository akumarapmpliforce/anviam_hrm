import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profileData:any;
  constructor() {}

  ngOnInit(): void {
    this.profileData = {
      pImage : "./assets/logo/profile-empty.jpg",
      name : "Test User",
      email:"nansari@gmail.com",
    }
  }
}
