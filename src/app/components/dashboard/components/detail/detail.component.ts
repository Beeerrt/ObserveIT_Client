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

  //Infounit deklarieren
  infounit : infounit;

/**
 * Creates an instance of DetailComponent.
 * @param {ActivatedRoute} route 
 * @param {Router} router 
 * @param {InfounitService} infounitService 
 * @memberof DetailComponent
 */
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
      this.infounitService.getUnitById(nodeid).subscribe(data => { 
        this.infounit = data; 
      });
       
    })
    
  }

}
