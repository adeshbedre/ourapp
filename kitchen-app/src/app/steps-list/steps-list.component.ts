import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.css']
})
export class StepsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("stepsList is ",this.stepsList);
  }

  @Input()stepsList: String[];
}
