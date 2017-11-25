import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.css']
})
export class HomecontentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFoodItemPage(foodType: String) {
        this.router.navigate(['/food', foodType]);
    
    }
}
