import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageLayoutModule } from 'src/app/page-layout/page-layout.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from 'src/app/page-layout/header-admin/header.component';
import { ProfileComponent } from 'src/app/pages/admin/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
    PageLayoutModule,
  ],
})
export class AdminModule {}
