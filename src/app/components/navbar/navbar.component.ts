import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {user} from '../../class/user';
import { TokenService } from '../../services/token.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: user;
  localUser : user;
  
  /**
   * Creates an instance of NavbarComponent.
   * @param {AuthService} authService 
   * @param {Router} router 
   * @param {FlashMessagesService} flashMessage 
   * @param {TokenService} tokenService 
   * @memberof NavbarComponent
   */
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private tokenService : TokenService
  ) { }

  ngOnInit() {
  }

  /**
   *Löscht alle Daten des LocalStorage
   */
  resetStorage()
  {
    localStorage.clear();
  }

  /**
   * Meldet den angemeldeten User ab
   */
  onLogoutClick()
  {
    this.authService.logout();
    this.flashMessage.show('Sie sind jetzt ausgeloggt', {cssClass: 'alert-success', timout: 5000});
    this.router.navigate(['login']);
    return false;
  }
/**
 *Prüft ob angemeldeter User Adminrechte besitzt
 */
isAdmin()
  {
    if(this.authService.loggedIn())
    {
       this.localUser = this.authService.getUserFromLocalStorage();
      if(this.localUser.isAdmin == false)
      {
        return false;
      }
      else
      {
        return true;
      }
    }

  }
}
