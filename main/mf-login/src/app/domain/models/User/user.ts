import { Rol } from '../Rol/rol';
export class User {
    user: string;
    password: string;
    activo: boolean;
    roles: Rol[]
}