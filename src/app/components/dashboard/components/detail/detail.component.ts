import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Router,ActivatedRoute, ParamMap } from '@angular/router';
import {InfounitService} from '../../../../services/infounit.service'
import { infounit } from '../../../../class/infounit';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //Infounit
  infounit : infounit;

  //Testdata
  radius = 100;
  colorCool = '#848484';
  innerStrokeColor = '#848484';
  node = 
  {
    temperatur: 20    
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infounitService : InfounitService
  ) { 
  }
  data :any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      //laden der daten der Infounit anhand der nodeID
      var nodeid = params.id;
      console.log(nodeid);
      var nodeinfo = this.infounitService.getUnitById(nodeid).subscribe(data => { 
        this.infounit = data; 
      });
       
    })
    
  }

}
