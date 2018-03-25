import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {user} from '../../../class/user';
import { Profile } from 'selenium-webdriver/firefox';



@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class AlterComponent implements OnInit {

    currentUser: user;
    newUser : user;
    newUserPassword: String;

    //Deklaration für die Dynamische verwendung der Prograssbar Klasse
    // progressbarClass;
    // passwordStrength;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  


  ngOnInit() {
    //Userdaten abfragen
    this.authService.getProfile().subscribe(profile => {
      this.newUser = profile.user;
      this.currentUser = Object.assign({}, this.newUser);;
      this.newUserPassword = '*************';
      },
    err => {
    return false;
  });
  }



//speichern der Userdaten
saveUserdata()
{
  //prüfen ob Password sich geändert hat
  if(this.newUserPassword != '*************')
  {
    console.log("neues Password eintragen:"  + this.newUserPassword);
    this.newUser.password = this.newUserPassword;
  }
 
  this.authService.setProfile(this.currentUser,this.newUser).subscribe(profile =>{
    console.log(profile);
    this.flashMessage.show("Userdaten erfolgreich geändert.", {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['profile']);
  },
  err =>{
    this.flashMessage.show("Userdaten konnte nicht geändert werden.", {cssClass: 'alert-warning', timeout: 5000});
  });
  
}

// checkPasswordStrength() {
 
//   var password = this.account.password;

//    var desc = ['0', '20', '40', '60', '80', '100'];

//     var descClass = ['', 'bg-danger', 'bg-danger', 'bg-warning', 'bg-success', 'bg-success'];

//     var score = 0;
  
//     // if password bigger than 8 give 1 point
//     if (password.length > 8) score++;
  
//     // if password has both lower and uppercase characters give 1 point	
//     if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) score++;
  
//     // if password has at least one number give 1 point
//     if (password.match(/d+/)) score++;
  
//     // if password has at least one special caracther give 1 point
//     if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) )	score++;
  
//     // if password bigger than 12 give another 1 point
//     if (password.length > 10) score++;
    
//       this.passwordStrength = desc[score]
//       this.progressbarClass = descClass[score];
//   }  

}
