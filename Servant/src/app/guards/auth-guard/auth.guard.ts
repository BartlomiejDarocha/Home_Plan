import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}
  canActivate(): boolean {
    if (!this.userService.getUser) {
      this.router.navigate(['/auth/login'], { replaceUrl: true });
      return false;
    };
    return true;
  }
  
}
