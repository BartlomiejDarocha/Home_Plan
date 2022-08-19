import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 public logged = false;
 // line above will be on subject also in sevice below
  constructor() { }
  public openSideMenu(): void {
    // sideMenu.toggle()" to do service
    console.log('this go to service which is not ready yet, code line above');
  }
}
