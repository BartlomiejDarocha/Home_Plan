import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public poweredList = [
    { name: 'Angular', icon: 'angular', url: 'https://angular.io/' },
    { name: 'Angular materials', icon: 'materials', url: 'https://material.angular.io/' },
    { name: 'RxJs', icon: 'rxjs', url: 'https://rxjs.dev/' },
    { name: 'Node Js', icon: 'node', url: 'https://nodejs.org/en/' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
