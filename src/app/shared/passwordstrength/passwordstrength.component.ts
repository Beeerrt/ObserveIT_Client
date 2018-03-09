import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwordstrength',
  templateUrl: './passwordstrength.component.html',
  styleUrls: ['./passwordstrength.component.css']
})
export class PasswordstrengthComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

   //password 
   public account = {
    password: <string>null
    };
    passwordStrength;

    //Deklaration für die Dynamische verwendung der Prograssbar Klasse
    progressbarClass;

  checkPasswordStrength() {
    
     var password = this.account.password;
   
      var desc = ['0', '20', '40', '60', '80', '100'];
   
       var descClass = ['', 'bg-danger', 'bg-danger', 'bg-warning', 'bg-success', 'bg-success'];
   
       var score = 0;
     
       // if password bigger than 8 give 1 point
       if (password.length > 8) score++;
     
       // if password has both lower and uppercase characters give 1 point	
       if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) score++;
     
       // if password has at least one number give 1 point
       if (password.match(/d+/)) score++;
     
       // if password has at least one special caracther give 1 point
       if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) )	score++;
     
       // if password bigger than 12 give another 1 point
       if (password.length > 10) score++;
       
         this.passwordStrength = desc[score]
         this.progressbarClass = descClass[score];
         console.log(this.passwordStrength);
     }  

}
