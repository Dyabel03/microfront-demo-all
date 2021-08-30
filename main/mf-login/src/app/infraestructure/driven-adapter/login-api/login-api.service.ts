import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/domain/models/Login/login';
import { User } from 'src/app/domain/models/User/user';
import { LoginGateway } from 'src/app/domain/models/Login/gateway/login-gateway';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export  class LoginService extends LoginGateway {

  constructor(private http: HttpClient) {super();}

  login(data: Login): Observable<User> {
    const body = {
        usuario: data.usuario,
        password: data.password
    };

    return this.http.post<User>(`${environment.base_url}/login`, body);
  }

//   getByID(id: String): Observable<Album> {
//     return this.http.get<Album>(this._url+id);
//   }
  
}