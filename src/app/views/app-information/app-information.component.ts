import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-app-information',
  templateUrl: './app-information.component.html',
  styleUrls: ['./app-information.component.scss']
})
export class AppInformationComponent implements OnInit {


  constructor(private dataService: DataService) { }
  app;
  edit = false;
  ngOnInit(): void {
    this.app = this.dataService.currentApp;
    console.log(this.app)
  }

}
