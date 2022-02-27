import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = {
    userId: 1,
    fName: 'TestFirstName',
    lName: 'TestLastName'
  }
  // private user: any = null;

  constructor() { }

  public get getUser(): any {
    return this.user;
  };

  public set setUser(user: any) {
    this.user = user;
  };
}
