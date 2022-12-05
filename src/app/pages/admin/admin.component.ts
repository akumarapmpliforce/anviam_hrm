import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var menu_btn = document.querySelector('#menu-btn')!;
    var sidebar = document.querySelector('#sidebar')!;
    var container = document.querySelector('.main')!;
    var topbar = document.querySelector('.topbar')!;
    menu_btn.addEventListener('click', () => {
      sidebar.classList.toggle('active-nav');
      container.classList.toggle('active-container');
      topbar.classList.toggle('active-container');
      // menu_btn.classList.toggle('menu-notActive')
    });
  }
}
