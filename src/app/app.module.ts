import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCardComponent } from './shared/components/app-card/app-card.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DiscoverComponent } from './views/discover/discover.component';
import { CategoryComponent } from './views/category/category.component';
import { AdminComponent } from './views/admin/admin.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RecommendedComponent } from './views/recommended/recommended.component';

import { FormsModule } from '@angular/forms';
import { AppInformationComponent } from './views/app-information/app-information.component';


@NgModule({
  declarations: [
    AppComponent,
    AppCardComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    DiscoverComponent,
    CategoryComponent,
    AdminComponent,
    RecommendedComponent,
    AppInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
