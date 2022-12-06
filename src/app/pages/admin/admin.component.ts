import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(max-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          document.getElementById('menu-btn')!.click();
        }
      });
  }

  ngOnInit(): void {
    var menu_btn = document.querySelector('#menu-btn')!;
    var sidebar = document.querySelector('#sidebar')!;
    var container = document.querySelector('.main')!;
    var topbar = document.querySelector('.topbar')!;
    menu_btn.addEventListener('click', () => {
      sidebar.classList.toggle('active-nav');
      container.classList.toggle('active-container');
      topbar.classList.toggle('active-container');
    });
  }
}
