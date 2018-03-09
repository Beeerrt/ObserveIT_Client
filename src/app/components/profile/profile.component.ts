import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {user} from '../../class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: user;
  change: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit() {  
     //Userdaten abfragen
     this.authService.getProfile().subscribe(profile => {
      console.log("Profile: User wird abgerufen");
      this.user = profile.user;
      console.log(this.user);
      },
    err => {
    return false;
  });
  }

  //Prüfen ob Usermodel angelegt ist
  isUserDefined()
  {
    if(this.user == undefined)
    {
      return false;
    }
    else{
      return true;
    }
  }

  

}
