import { Component, OnInit } from '@angular/core';
import { LoginDataModel } from 'src/app/models/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword = false;
  public loginData: LoginDataModel = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  public changeEye(target: any): void {
    console.log(target.target);
    this.showPassword = !target.target.className.includes('eye_icon');
    console.log(this.showPassword, 'showPassword');
    if(this.showPassword) {
      //zrób to w html i css
      target.target.classList.add('dupa');
      target.target.classList.remove('eye_icon');
    }
  }

  public login(): void {
    console.log(this.loginData, 'loginData');
  }

}
