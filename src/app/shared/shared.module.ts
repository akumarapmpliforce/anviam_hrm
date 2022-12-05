import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';

const components = [ProfileComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
  ],
  exports:[components]
})
export class SharedModule { }
