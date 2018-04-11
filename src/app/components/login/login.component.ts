import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { TokenService } from '../../services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

/**
 * Creates an instance of LoginComponent.
 * @param {AuthService} authService 
 * @param {Router} router 
 * @param {FlashMessagesService} flashMessage 
 * @param {TokenService} tokenService 
 * @memberof LoginComponent
 */
constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private tokenService: TokenService
  ) { 
   
  }

  ngOnInit() {
  }
  
 /**
  * Authentifiziert eingegebene Userdaten am Webservice
  */
  onLoginSubmit()
  {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data=> {
      if(data.success)
      {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('Willkommen ' + data.user.name , {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['dashboard']);
      }
      else
      {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['login']);
      }
    });
    
  }

}
