import { Component, OnInit } from '@angular/core';
import { EmailPattern } from 'src/app/models/patterns/patterns';

@Component({
  selector: 'app-registery',
  templateUrl: './registery.component.html',
  styleUrls: ['./registery.component.scss']
})
export class RegisteryComponent extends EmailPattern implements  OnInit {
  public registeryData = {
    name: '',
    avatar: '',
    email: '',
    sex: '',
    password: '',
    passwordRepeat: ''
  }

  constructor() {
    super()
   }

  ngOnInit(): void {
  }

  public register() {
    console.log('resgisery');
    
  }

}
