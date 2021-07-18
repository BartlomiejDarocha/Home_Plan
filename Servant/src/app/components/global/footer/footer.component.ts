import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public poweredList = [
    {name: 'Angular', icon: 'angular', url: ''},
    {name: 'Angular materials', icon: 'materials', url: ''},
    {name: 'RxJs', icon: 'rxjs', url: ''},
    {name: 'Node', icon: 'node', url: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
