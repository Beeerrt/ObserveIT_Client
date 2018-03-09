import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../../../services/share-data.service';

@Component({
  selector: 'app-valuepanel',
  templateUrl: './valuepanel.component.html',
  styleUrls: ['./valuepanel.component.css']
})
export class ValuepanelComponent implements OnInit {
  
  @Input() node;
  id;
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
