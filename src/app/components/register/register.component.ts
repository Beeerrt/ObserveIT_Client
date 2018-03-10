import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;


  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService 
   )
    { 

    }

  ngOnInit() {
  }

  //Ausführen bei klick auf Submit
  //Standard wird der User als nicht Admin angelegt
  //Nur der AdminUser darf somit User anlegen
  onRegisterSubmit(){

    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      isAdmin: false
    }
    //Benötigte Felder prüfen
    if(!this.validateService.valdidateRegister(user))
    {
      console.log('nicht alle felder ausgefüllt');
        this.flashMessage.show('Bitte alle Felder ausfüllen!',{cssClass: 'alert-danger', timeout: 6000});
        return false;
    }


    //User in der DB anlegen
    this.authService.registerUser(user).subscribe(data => {
      if(data.success)
      {
         this.router.navigate(['/register']);
         this.flashMessage.show('Erfolgreich registriert!',{cssClass: 'alert-success', timeout: 6000});
      }
      else
      {
        this.router.navigate(['/register']);
        this.flashMessage.show('Unerwarteter Fehler!',{cssClass: 'alert-danger', timeout: 6000});
      }
    });

  }

}
