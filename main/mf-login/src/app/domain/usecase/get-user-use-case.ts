import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Login } from '../models/Login/login';
import { User } from '../models/User/user';
import { LoginGateway } from '../models/Login/gateway/login-gateway';

@Injectable({
  providedIn: 'root'
})

export class GetLoginUseCases {
  constructor( private _loginateWay: LoginGateway) {}  

  login (data: Login) : Observable <User> {
    return this._loginateWay.login(data);
  }

}