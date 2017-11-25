import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {RecipeDataService} from '../recipe-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
private _recipeId :string;
public foodType:string;
public recipes :any;
public recipesObservable :Observable<any>;
  constructor(private _recipeDataService: RecipeDataService,private _activatedRoute:ActivatedRoute) {

   }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {
      console.log("the food type is "+ params.get("foodType"));
      console.log("the recipe id is "+params.get("recipeId"));
      this._recipeId = params.get("recipeId");
      this.foodType = params.get("foodType");
    });
    this._recipeDataService.fetchRecipeData(this.foodType).subscribe(
      (data: Response) => {
        this.recipes = data[this._recipeId];
        console.log("the data is "+ this.recipes);
      }
    );
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
    return "cyan";
  }
}

