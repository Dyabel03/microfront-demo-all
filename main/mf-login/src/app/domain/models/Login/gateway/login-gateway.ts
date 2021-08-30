import { Observable } from 'rxjs';
import { Login } from '../../Login/login';
import { User } from '../../User/user';

export abstract class LoginGateway {
    abstract login(data: Login): Observable<User>;
} 