import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  template: `<div class="container1 mb-3 mt-4">
    <div class="mx-auto my-2 custom-profile">
      <img
        [src]="data?.pImage"
        alt=""
        class="mw-100 mh-100 w-100 h-auto rounded-circle"
      />
    </div>
    <div class="username text-center">
      <h6 class="text-white">{{ data?.name }}</h6>
    </div>
  </div>`,
  styles: ['.custom-profile { width: 100px;height: 100px;}'],
})
export class ProfileInfoComponent implements OnInit {
  
  @Input() data!: any;
  constructor() {}

  ngOnInit(): void {}
}
