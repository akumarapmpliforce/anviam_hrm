import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { PageLayoutModule } from 'src/app/page-layout/page-layout.module';
import { MaterialModule } from 'src/app/modules/material.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FullCalendarModule,
    PageLayoutModule,
    SharedModule,
    MaterialModule
  ],
})
export class HomeModule {}
