import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {user} from '../../class/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: user;
  localUser : user;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService 
  ) { }

  ngOnInit() {
  }
  

  onLogoutClick()
  {
    this.authService.logout();
    this.flashMessage.show('Sie sind jetzt ausgeloggt', {cssClass: 'alert-success', timout: 5000});
    this.router.navigate(['login']);
    return false;
  }

  isAdmin()
  {
  
    if(this.authService.loggedIn())
    {
       this.localUser = this.authService.getUserFromLocalStorage();
      //console.log(this.user);
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
