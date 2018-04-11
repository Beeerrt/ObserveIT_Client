import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../../../services/share-data.service';

@Component({
  selector: 'app-valuepanel',
  templateUrl: './valuepanel.component.html',
  styleUrls: ['./valuepanel.component.css']
})
export class ValuepanelComponent implements OnInit {
  
  @Input() node;

  /**
   * Creates an instance of ValuepanelComponent.
   * @param {ShareDataService} shareddata 
   * @memberof ValuepanelComponent
   */
  constructor(
    private shareddata : ShareDataService
  ) { }

  ngOnInit() {

  }


  ngOnDestroy()
  {
    this.shareddata.data = this.node;
  }


}
