import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LogoareaComponent } from './logoarea/logoarea.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';  
import { MatGridListModule } from '@angular/material';
import { RecipeComponent } from './recipe/recipe.component';
import { routes } from './app.router';
import { ItemListComponent } from './item-list/item-list.component';
import { StepsListComponent } from './steps-list/steps-list.component';
import { RecipeDataService } from './recipe-data.service';
import { HttpModule } from '@angular/http';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodListService } from './food-list.service'; 
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogoareaComponent,
    HomecontentComponent,
    CarouselComponent,
    TabsComponent,
    RecipeComponent,
    ItemListComponent,
    StepsListComponent,
    FoodListComponent,
    CardsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    HttpModule,
    routes
  ],
  providers: [RecipeDataService,FoodListService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
