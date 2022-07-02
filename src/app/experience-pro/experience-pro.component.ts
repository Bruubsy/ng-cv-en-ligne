import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';

@Component({
  selector: 'app-experience-pro',
  templateUrl: './experience-pro.component.html',
  styleUrls: ['./experience-pro.component.css'
  ]
})
export class ExperienceProComponent implements AfterViewInit {

  constructor(private angular2MaterializeService: Angular2MaterializeV1Service) { }

  ngAfterViewInit(): void {
    this.angular2MaterializeService.initCarousel('.carousel', { indicators: true });
  }
}
