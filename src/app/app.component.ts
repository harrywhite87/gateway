import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gateway';
  user;
  apps;
  constructor(private dataService: DataService) {
    this.user = this.dataService.user;
    this.dataService.getUser('Harry');
    this.apps = this.dataService.apps;

  }
}
