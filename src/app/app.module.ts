import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroService } from './hero.service';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages/messages.component';
import { GameUiComponent } from './game-ui/game-ui.component';
import { GameButtonComponent } from './game-button/game-button.component';
import { GameTextComponent } from './game-text/game-text.component';
import { GameStateService } from './game-state.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroListComponent,
    MessagesComponent,
    GameUiComponent,
    GameButtonComponent,
    GameTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, MessagesService, GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
