import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-admin/header.component';
import { MaterialModule } from '../modules/material.module';
import { HeaderTopComponent } from './header-top/header-top.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [HeaderTopComponent, HeaderComponent, FooterComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [COMPONENTS],
})
export class PageLayoutModule {}
