import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { FoodListService } from '../food-list.service';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
public foodType: string;
public foodList: any[];
public searchText: string;
  constructor(private _route:ActivatedRoute,private foodListService :FoodListService) {
    
   }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      console.log(params.get("foodType"));
      this.foodType = params.get("foodType");
    });
    console.log("this.foodType is "+this.foodType);
    this.foodListService.fetchFoodList(this.foodType).subscribe(
      (data : any) => {
        console.log("inside service the food type is "+this.foodType);
        console.log("data from food list service is ", data);
        this.foodList = data;
      }
    );
  }

  inputChange(event: any){
    console.log(event.target.value);
    this.searchText = event.target.value;
  }
}
