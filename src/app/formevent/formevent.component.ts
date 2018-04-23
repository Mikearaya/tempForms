import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formevent',
  templateUrl: './formevent.component.html',
  styleUrls: ['./formevent.component.css']
})
export class FormeventComponent implements OnInit {
  clickMessage: string;
  constructor() { }
  clickMe(): void {
    this.clickMessage = 'sI Got Clicked';
  }
  ngOnInit() {
  }

}
