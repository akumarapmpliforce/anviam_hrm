import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/shared/animations/route-animation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
