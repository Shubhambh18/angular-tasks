import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';


@Component({
  selector: 'app-fetch-operator',
  templateUrl: './fetch-operator.component.html',
  styleUrls: ['./fetch-operator.component.css']
})
export class FetchOperatorComponent implements OnInit {

  @Input() srchCity: string;
  @Output() operator: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  send() {
    if (this.srchCity === 'chennai') {
      console.log("Search is fired");
      this.operator.emit('Ramesh 996256789');

    }

    else {

      this.operator.emit('Suresh 123456789');


    }
  }

}
