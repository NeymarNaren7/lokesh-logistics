import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public currentYear: number = 0;
  constructor(private router: Router){}
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
  title = 'lokesh-logistics';
  routeToContact(){
    this.router.navigate(['contact']);
  }

  // services.component.ts
services = [
  { title: 'Door to Door Logistics', image: 'assets/images/background_image.jpg' },
  { title: 'Project Logistics', image: 'assets/images/background_image.jpg' },
  { title: 'Agency Services', image: 'assets/images/background_image.jpg' },
  { title: 'Customs Clearance', image: 'assets/images/background_image.jpg' },
  { title: 'Container Trading', image: 'assets/images/background_image.jpg' },
  { title: 'Packing, Repacking, Lashing & Choking Services', image: 'assets/images/background_image.jpg' }
];

}
