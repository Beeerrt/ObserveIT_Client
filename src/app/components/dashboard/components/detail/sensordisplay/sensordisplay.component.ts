import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../../../../services/share-data.service';

@Component({
  selector: 'app-sensordisplay',
  templateUrl: './sensordisplay.component.html',
  styleUrls: ['./sensordisplay.component.css']
})
export class SensordisplayComponent implements OnInit {

  @Input() node;

  
/**
 * Creates an instance of SensordisplayComponent.
 * @param {ShareDataService} shareddata 
 * @memberof SensordisplayComponent
 */
constructor(
    private shareddata : ShareDataService
  ) { }

  ngOnInit( ) {
    if(this.node == null)
    {
      this.node = this.shareddata.data

    }
  }

}
