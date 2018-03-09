import { Injectable } from '@angular/core';

@Injectable()
export class ShareDataService {

  //Sharedservice dient zum übergeben von Daten über Routen hinweg
  public data:any;

  constructor() { }

}
