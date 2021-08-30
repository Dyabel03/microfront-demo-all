import { of } from 'rxjs';
import { delay }  from  'rxjs/operators'; 

export function login(data: any) {
    return of(data).pipe(delay(3000));
} 