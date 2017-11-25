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
    console.log("stepslist foodType is ",this.foodType);
  }
  getStyle(){
    if(this.foodType=="veg"){
      return "#3c763d";
    }else if(this.foodType=="nonveg"){
      return "#a94442";
    }else if(this.foodType=="simple"){
      return "#8a6d3b";
    }else if(this.foodType=="sweet"){
      return "#31708f";
    }
  }
  @Input()stepsList: String[];
  @Input()foodType: String; 
}
