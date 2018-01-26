import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class FoodListService {


  log(){
    console.log("hey tehre dawg");
  }

  constructor(private http: Http) {
   }

   fetchFoodList(foodType :string){
     let url :string = "";
     if(foodType == "veg")
     {
      url = environment.jsonUrl+"foodlist/veglist.json";
     }
     else if(foodType == "nonveg"){
      url = environment.jsonUrl+"foodlist/nonveglist.json";
     }
     else if(foodType == "simple"){
      url = environment.jsonUrl+"foodlist/simplelist.json";
     }
     else if(foodType == "sweet"){
      url = environment.jsonUrl+"foodlist/sweetlist.json";
     }
    return this.http.get(url).map(
      (res) => res.json()
    )
   }

}
