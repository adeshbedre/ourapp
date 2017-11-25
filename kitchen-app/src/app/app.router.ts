import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { RecipeComponent } from './recipe/recipe.component';
import { StepsListComponent } from './steps-list/steps-list.component';
import { FoodListComponent } from './food-list/food-list.component';

export const router: Routes = [
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
    { path: 'home', component: HomecontentComponent  },
    { path: 'steps' , component: StepsListComponent },
    { path: 'food/:foodType' ,component: FoodListComponent },
    { path: 'recipe/:foodType/:recipeId', component: RecipeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
