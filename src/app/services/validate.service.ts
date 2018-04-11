import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }


  /**
   * Überprüft ob übergebenes User Objekt valide ist
   * @param user 
   */
  valdidateRegister(user)
  {
    if(user.name == undefined || user.email == undefined || 
      user.username == undefined || user.password == undefined )
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}

