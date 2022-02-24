import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
      { path: 'reports', component: ReportsComponent },
      { path: 'protocols', component: ProtocolsComponent },
      { path: 'settings', component: SettingsComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
