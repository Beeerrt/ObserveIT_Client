import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {user} from '../class/user';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable()
export class OnlyAdminGuard implements CanActivate { 
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) {}; 

  canActivate() {
    console.log("Only Admin User");
    var user : user;
    user = this.authService.getUserFromLocalStorage();

    if (user.isAdmin == true) { 
      return true;
    } else {
      console.log("Ist kein Admin")
      
      this.flashMessage.show('Sie besitzen keine Berechtigung um diese Route aufzurufen', {cssClass: 'alert-danger', timout: 5000});
      this.router.navigate(['/home']);
      return false;
    }
  }
}