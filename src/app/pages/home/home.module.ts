import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { PageLayoutModule } from "src/app/page-layout/page-layout.module";
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [CommonModule, RouterModule.forChild(routes),
    FullCalendarModule,PageLayoutModule
  ],
})
export class HomeModule {}
