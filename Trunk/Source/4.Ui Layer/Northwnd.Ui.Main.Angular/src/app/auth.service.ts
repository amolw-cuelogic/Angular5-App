import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    public getToken() {
        console.log('token');
    return localStorage.getItem('token');
  }

  public isAuthenticated(){
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return true;
  }

}