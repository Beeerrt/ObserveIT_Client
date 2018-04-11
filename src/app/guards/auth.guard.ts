import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {user} from '../class/user';

@Injectable()
export class AuthGuard implements CanActivate{

    
    constructor(
        private authService:AuthService,
        private router:Router
    )
    {}    
/**
 * Überprüft ob User angemeldet ist
 * @returns boolean
 */
canActivate()
    {
        if(this.authService.loggedIn())
        {
            return true;
        }
        else
        {
            this.router.navigate(['/login']);
            return false;
        }
    }

}