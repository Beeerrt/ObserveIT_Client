import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }


  //prüft ob User verwendbare Daten enthält
  valdidateRegister(user)
  {
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined )
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}
