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

    currentUserName: any;
    newUser :user;



    

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
      //console.log("User wird abgerufen");
      this.currentUserName = profile.user;
      this.newUser = profile.user;
        console.log(this.currentUserName);
      // console.log(this.newUser);
      },
    err => {
    return false;
  });
  }



//speichern der Userdaten
saveUserdata()
{
  console.log("neuer username : "+ this.newUser.username);
  console.log("alter username : " + this.currentUserName.username);


  // console.log(this.user.name);
  // var users = [];
  // users.push(this.user);
  

 // console.log(users);

  //this.authService.setProfile();
  this.flashMessage.show("Userdaten erfolgreich geändert.", {cssClass: 'alert-success', timeout: 5000});
  //this.router.navigate(['/profile']);

  //console.log("wurde aufgerufen");
  //prüfen ob Userdaten geändert wurden
  // console.log(this.changedUser)
  // if(this.changedUser.password == this.user.password)
  // {
   
   
  // }
  // else if(this.changedUser.password != this.user.password )
  // {
  //   this.flashMessage.show('Benutzerdaten erfolgreich gespeichert',{cssClass: 'alert-success', timeout: 6000});
  // }
  

  

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
