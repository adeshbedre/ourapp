import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class RecipeDataService {

  constructor(private http: Http) {
   }

   fetchRecipeData(foodType:string){
    let url :string = "";
    if(foodType == "veg")
    {
     url = environment.jsonUrl+"recipelist/vegrecipe.json";
    }
    else if(foodType == "nonveg"){
     url = environment.jsonUrl+"recipelist/nonvegrecipe.json";
    }
    else if(foodType == "simple"){
     url = environment.jsonUrl+"recipelist/simplerecipe.json";
    }
    else if(foodType == "sweet"){
     url = environment.jsonUrl+"recipelist/sweetrecipe.json";
    }
    return this.http.get(url).map(
      (res) => res.json()
    )
   }
}
