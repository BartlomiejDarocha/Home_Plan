import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 @Input() logged = false;
 @Output() openSideMenu$ = new EventEmitter();
  constructor() { }

  public openSideMenu(): void {
    this.openSideMenu$.emit();
  }
}
