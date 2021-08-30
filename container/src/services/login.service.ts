import { of } from 'rxjs';
import { delay }  from  'rxjs/operators'; 

const url = 'http://127.0.0.1:3000/login';

export function login(data: any) {
    return of(data).pipe(delay(3000));
} 

export async function loginAPI(data: any) {
    const _body = {
        usuario: data.email ,
        password: data.pass
    }
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(_body)
    });
}