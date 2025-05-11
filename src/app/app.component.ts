import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public currentYear: number = 0;
  constructor(){}
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
  title = 'lokesh-logistics';
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

services = [
  { title: 'Door to Door Logistics', image: 'assets/images/background_image.jpg' },
  { title: 'Project Logistics', image: 'assets/images/background_image.jpg' },
  { title: 'Agency Services', image: 'assets/images/background_image.jpg' },
  { title: 'Customs Clearance', image: 'assets/images/background_image.jpg' },
  { title: 'Container Trading', image: 'assets/images/background_image.jpg' },
  { title: 'Packing, Repacking, Lashing & Choking Services', image: 'assets/images/background_image.jpg' }
];

}
