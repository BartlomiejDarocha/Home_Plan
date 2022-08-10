import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registery',
  templateUrl: './registery.component.html',
  styleUrls: ['./registery.component.scss']
})
export class RegisteryComponent implements OnInit {
  public registeryData = {
    name: '',
    nickName: '',
    avatar: '',
    email: '',
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

  public register() {
    console.log('resgisery');
    
  }

}
