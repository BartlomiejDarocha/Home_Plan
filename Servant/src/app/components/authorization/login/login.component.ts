import { Component, OnInit } from '@angular/core';
import { LoginDataModel } from 'src/app/models/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  public showPassword = false;
  public loginData: LoginDataModel = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  public changeEye(): void {
    this.showPassword = !this.showPassword;
  }

  public login(): void {
  }

}
