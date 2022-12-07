import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/shared/animations/route-animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // var menu_btn = document.querySelector('#menu-btn')!;
    // var sidebar = document.querySelector('#sidebar')!;
    // var container = document.querySelector('.my-container')!;
    // menu_btn.addEventListener('click', () => {
    //   sidebar.classList.toggle('active-nav');
    //   container.classList.toggle('active-cont');
    // });
  }

  // let paylocad = {

  // }
}
