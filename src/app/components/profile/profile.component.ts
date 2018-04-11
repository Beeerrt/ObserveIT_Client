import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { user } from '../../class/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: user;
  change: boolean = true;
  userArray = [];

/**
 * Creates an instance of ProfileComponent.
 * @param {AuthService} authService 
 * @param {Router} router 
 * @param {FlashMessagesService} flashMessage 
 * @memberof ProfileComponent
 */
constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }


  ngOnInit() {
    //Userdaten abfragen
    var user = this.authService.getUserFromLocalStorage();
    this.authService.getProfile(user.username).subscribe(profile => {
      this.user = profile.user;
    },
      err => {
        return false;
      });

    //laden der User
    this.authService.getUsers().subscribe(Users => {
      this.userArray = Users;
      console.log(Users);
    })
  }

  /**
   * Löscht übergebenen User aus der Datenbank
   * @param user 
   */
  onUserDelete(user) {
    this.authService.deleteUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
        //userarray neu laden
        //laden der User
        this.authService.getUsers().subscribe(Users => {
          this.userArray = Users;
        })
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
      }
    })
  }

  //Prüfen ob Usermodel angelegt ist
  isUserDefined() {
    if (this.user == undefined) {
      return false;
    }
    else {
      return true;
    }
  }
 /**
  * Prüft ob angemeldeter User Adminrechte besitzt
  */
  isUserAdmin() {
    if (this.user.isAdmin == true) {
      return true;
    }
    else {
      return false;
    }
  }



}
