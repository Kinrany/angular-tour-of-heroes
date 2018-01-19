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
import { GameRootComponent } from './game-root/game-root.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroListComponent,
    MessagesComponent,
    GameUiComponent,
    GameRootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
