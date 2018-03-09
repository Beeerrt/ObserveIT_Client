import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-node-setting',
  templateUrl: './node-setting.component.html',
  styleUrls: ['./node-setting.component.css']
})
export class NodeSettingComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }




  ngOnInit() {
    this.route.params.subscribe(params => {
      //to Do
      //laden der daten der Infounit anhand der nodeID
      
      //id der Node die über die Route mitgegeben wurde
      //alert(params.id);
    })
  }

}
