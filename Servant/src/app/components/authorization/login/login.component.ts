import { Component, OnInit } from '@angular/core';
import { LoginDataModel } from 'src/app/models/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
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
