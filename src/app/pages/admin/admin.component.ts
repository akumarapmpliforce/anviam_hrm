import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { fadeInAnimation } from 'src/app/shared/animations/route-animation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class AdminComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver,private authService:AuthService) {
    this.breakpointObserver
      .observe(['(orientation: portrait)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          setTimeout(() => {
            document.getElementById('menu-btn')!.click();
          }, 500);
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

  logOut(){
    this.authService.logOut();
  }
}
