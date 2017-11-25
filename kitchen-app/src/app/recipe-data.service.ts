import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RecipeDataService {

  constructor(private http: Http) {
   }

   fetchRecipeData(foodType:string){
    let url :string = "";
    if(foodType == "veg")
    {
     url = "/assets/json/recipelist/vegrecipe.json";
    }
    else if(foodType == "nonveg"){
     url = "/assets/json/recipelist/nonvegrecipe.json";
    }
    else if(foodType == "simple"){
     url = "/assets/json/recipelist/simplerecipe.json";
    }
    else if(foodType == "sweet"){
     url = "/assets/json/recipelist/sweetrecipe.json";
    }
    return this.http.get(url).map(
      (res) => res.json()
    )
   }
}
