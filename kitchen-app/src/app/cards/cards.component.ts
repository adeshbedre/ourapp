import {Component, Inject, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{

  animal: string;
  name: string;

  constructor(private router: Router) {
  }

  goToRecipePage(foodType :String ,recipeId :String ){
    console.log("foodType is ",foodType);
    console.log("foodList is ",recipeId);
    this.router.navigate(['/recipe', foodType , recipeId]);
  }
  @Input()foodType: String;
  @Input()foodList: any[];
  @Input()searchText: string;
  }
