import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { Tours } from '../tours';

@Component({
  selector: 'app-tourshow',
  templateUrl: './tourshow.component.html',
  styleUrls: ['./tourshow.component.css']
})
export class TourshowComponent implements OnInit {

  tourList:Tours[];

  constructor(private service:TourService) { }

  ngOnInit() {

    this.service.findAll().subscribe(resp=>this.tourList=resp);
  }

}
