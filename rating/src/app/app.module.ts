import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingsComponent } from './ratings/ratings.component';
import { DisplayComponent } from './display/display.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RatingCardComponent } from './rating-card/rating-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingsComponent,
    DisplayComponent,
    DropdownComponent,
    RatingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
