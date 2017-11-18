import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RecipeDataService {

  log(){
    console.log("hey tehre dawg");
  }

  constructor(private http: Http) {
   }

   fetchRecipeData(){
    return this.http.get('/assets/json/recipe.json').map(
      (res) => res.json()
    )
   }
}
