import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {RecipeDataService} from '../recipe-data.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
private _recipeId :number = 1;
public recipes :any;
public helloVar :String = "hello";
public recipesObservable :Observable<any>;
  constructor(private recipeDataService: RecipeDataService) {

   }

  ngOnInit() {
    this.recipeDataService.fetchRecipeData().subscribe(
      (data: Response) => {
        this.recipes = data[this._recipeId];
        console.log("the data isss "+ this.recipes);
      }
    );
  }

}

