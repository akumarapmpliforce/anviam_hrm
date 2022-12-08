import { MaterialModule } from './../modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';

import { CarouselComponent } from './components/carousel/carousel.component';

const components = [ProfileInfoComponent, CarouselComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialModule],
  exports: [components],
})
export class SharedModule {}
