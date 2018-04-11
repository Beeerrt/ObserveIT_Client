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

/**
 * Creates an instance of RegisterComponent.
 * @param {ValidateService} validateService 
 * @param {AuthService} authService 
 * @param {Router} router 
 * @param {FlashMessagesService} flashMessage 
 * @memberof RegisterComponent
 */
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

  /**
   * Registriert neuen User in der Datebank
   */
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
        this.flashMessage.show(data.msg,{cssClass: 'alert-danger', timeout: 6000});
      }
    });

  }

}
