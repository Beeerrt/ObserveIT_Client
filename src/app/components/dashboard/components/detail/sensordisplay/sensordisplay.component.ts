import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../../../../services/share-data.service';

@Component({
  selector: 'app-sensordisplay',
  templateUrl: './sensordisplay.component.html',
  styleUrls: ['./sensordisplay.component.css']
})
export class SensordisplayComponent implements OnInit {

  @Input() node;

  unit;

  constructor(
    private shareddata : ShareDataService
  ) { }

  ngOnInit( ) {
    if(this.node == null)
    {
      console.log(this.shareddata);
      this.node = this.shareddata.data

    }
    else
    {
      console.log(this.node);
    }
    
  }

}
