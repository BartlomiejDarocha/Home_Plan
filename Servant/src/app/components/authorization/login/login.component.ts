import { Component, OnInit } from '@angular/core';
import { LoginDataModel } from 'src/app/models/login/login.model';
import { EmailPattern } from 'src/app/models/patterns/patterns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends EmailPattern implements OnInit {
  public showPassword = false;
  public loginData: LoginDataModel = {
    email: '',
    password: ''
  }

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

  public changeEye(): void {
    this.showPassword = !this.showPassword;
  }

  public login(): void {
  }

}
