import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public poweredList = [
    {name: 'Angular', icon:'', url: ''},
    {name: 'Angular materials', icon:'', url: ''},
    {name: 'RxJs', icon:'', url: ''},
    {name: 'Node', icon:'', url: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
