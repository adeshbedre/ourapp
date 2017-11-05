import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LogoareaComponent } from './logoarea/logoarea.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { CardsComponent,DialogOverviewExampleDialog } from './cards/cards.component';
import { CardComponent } from 'ng2-bootstrap-card/ng2-bootstrap-card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';  
import {MatGridListModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import { RecipeComponent } from './recipe/recipe.component';
import {MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import { routes } from './app.router';
import { ItemListComponent } from './item-list/item-list.component';
import { StepsListComponent } from './steps-list/steps-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoareaComponent,
    HomecontentComponent,
    CarouselComponent,
    TabsComponent,
    CardComponent,
    RecipeComponent,
    ItemListComponent,
    StepsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatStepperModule,
    MatButtonModule,
    MatTableModule,
    routes
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
