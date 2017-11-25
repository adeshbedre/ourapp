import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
      url = "/assets/json/foodlist/veglist.json";
     }
     else if(foodType == "nonveg"){
      url = "/assets/json/foodlist/nonveglist.json";
     }
     else if(foodType == "simple"){
      url = "/assets/json/foodlist/simplelist.json";
     }
     else if(foodType == "sweet"){
      url = "/assets/json/foodlist/sweetlist.json";
     }
    return this.http.get(url).map(
      (res) => res.json()
    )
   }

}
