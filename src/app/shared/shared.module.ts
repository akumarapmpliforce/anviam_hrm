import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { MaterialModule } from '../modules/material.module';

const components = [ProfileInfoComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialModule],
  exports: [components],
})
export class SharedModule {}
