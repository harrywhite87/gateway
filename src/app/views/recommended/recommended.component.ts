import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }
  recommended = this.dataService.recommended;
  apps = this.dataService.apps

  ngOnInit(): void {

  }
  pinApp(recomendation) {
    // this.apps.forEach(app => {
    //   if (app.id === recomendation.id) {
    //     app.status = 'installed';
    //   }
    // })
    // console.log(recomendation.id)
    this.dataService.addApp(recomendation.id)
    this.router.navigate(['dashboard']);

    // recomendation.status = 'installed';

  }
}
