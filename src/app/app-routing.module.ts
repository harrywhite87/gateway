import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './views/admin/admin.component'
import { CategoryComponent } from './views/category/category.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DiscoverComponent } from './views/discover/discover.component';
import { LoginComponent } from './views/login/login.component';
import { RecommendedComponent } from './views/recommended/recommended.component'
import { AppInformationComponent } from './views/app-information/app-information.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:state', component: DashboardComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'category/:state', component: CategoryComponent },
  { path: 'recommended', component: RecommendedComponent },
  { path: 'app', component: AppInformationComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
