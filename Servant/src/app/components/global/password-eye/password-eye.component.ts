import { Component } from '@angular/core';

@Component({
  selector: 'app-password-eye',
  templateUrl: './password-eye.component.html',
  styleUrls: ['./password-eye.component.scss']
})
export class PasswordEyeComponent {
  public showPassword = false;
  public inputType = 'password'

  constructor() {
    this.emitCurrentInputType();
  }

  public changeEye(): void {
    this.showPassword = !this.showPassword;
    this.emitCurrentInputType();
  }

  private emitCurrentInputType(): void {
    this.inputType = this.showPassword ? 'text' : 'password';
  }

}
