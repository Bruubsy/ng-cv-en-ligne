import { AfterViewInit, Component } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html'
})
export class FormationComponent implements AfterViewInit {

  constructor(private angular2MaterializeService: Angular2MaterializeV1Service) { }
  ngAfterViewInit(): void {
    this.angular2MaterializeService.initCollapsible('.collapsible');
  }


}
