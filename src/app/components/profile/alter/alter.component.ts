import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { user } from '../../../class/user';
import { Profile } from 'selenium-webdriver/firefox';



@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class AlterComponent implements OnInit {

  currentUser: user;
  newUser: user;
  newUserPassword: String = '*************';

  public account = {
    password: <string>null
  };
  passwordStrength;
  progressbarClass;


/**
 * Creates an instance of AlterComponent.
 * @param {AuthService} authService 
 * @param {Router} router 
 * @param {FlashMessagesService} flashMessage 
 * @memberof AlterComponent
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
      this.newUser = profile.user;
      this.currentUser = Object.assign({}, this.newUser);;
      this.newUserPassword = '*************';
    },
      err => {
        return false;
      });
  }




  /**
   *Speichern der Userdaten aus dem Formular
   */
  saveUserdata() {
    if (this.newUserPassword != "") {
      //prüfen ob Password sich geändert hat
      if (this.newUserPassword != '*************') {
        this.newUser.password = this.newUserPassword;
      }
    }

    this.authService.setProfile(this.currentUser, this.newUser).subscribe(data => {
      if(data.success){
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
        this.authService.refreshLocalUserData(this.newUser);
        this.router.navigate(['profile']);
      }
      else{
        this.flashMessage.show(data.msg,  { cssClass: 'alert-warning', timeout: 5000 });
      }
    },
      err => {
        this.flashMessage.show("Userdaten konnte nicht geändert werden.", { cssClass: 'alert-warning', timeout: 5000 });
      });
  }



/**
 * Prüft Stärke des Passworts im Input Feld 
 */
checkPasswordStrength() {
    this.newUserPassword = this.account.password;
    var password = this.account.password;

    var desc = ['0', '20', '40', '60', '80', '100'];

    var descClass = ['', 'bg-danger', 'bg-danger', 'bg-warning', 'bg-success', 'bg-success'];

    var score = 0;

    //Länger als 8 Zeichen
    if (password.length > 8) score++;

    //Enthält Große und Kleine Zeichen
    if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) score++;

    //Enthält mindestens eine Zahl
    if (password.match(/d+/)) score++;

    //Enthält mindestens ein Sonderzeichen
    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) score++;

    //Länger als 10 Zeichen
    if (password.length > 10) score++;

    this.passwordStrength = desc[score]
    this.progressbarClass = descClass[score];
    console.log(this.passwordStrength);
  }
}
