import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  state;
  apps;
  installed;
  available;
  currentApp;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.apps = this.dataService.apps;
    this.dataService.getUser('Harry');
    // this.installed = this.apps.filter(app => { return app.status === 'installed' });
    console.log(this.installed)
    // console.log(this.apps)
    // this.available = this.apps.filter(app => { return app.status === 'available' });

    // this.currentApp = this.available[0];
  }

  // install(i) {

  //   const id = this.available[i].id;
  //   this.apps.filter(app => app.id === id)[0].status = 'installed'
  //   this.installed.push(this.available[i])
  //   this.available.splice(i, 1)

  // }

  openApp(app) {
    this.dataService.currentApp = app;
    // this.showApp = true;
    this.router.navigate(['app']);

  }

}