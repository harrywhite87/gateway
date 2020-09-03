import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  state;
  category;
  apps: { installed: any[]; available: any[]; all: any[]; };
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.dataService.getUser('Harry')
    this.category = this.dataService.categories[this.activatedroute.snapshot.paramMap.get('state')]
    this.apps = this.dataService.apps;
    setTimeout(() => { console.log(this.apps, this.category) }, 1000)

    // console.log(this.category)
    // this.state = this.activatedroute.snapshot.paramMap.get('state');
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
