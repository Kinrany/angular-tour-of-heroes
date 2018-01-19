import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .italic {
      font-style: italic
    }
  `],
  template: `
    <game-root></game-root>
    <hr>
    <h1 class="italic"> {{title}} </h1>
    <app-heroes></app-heroes>
    <app-messages></app-messages>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
