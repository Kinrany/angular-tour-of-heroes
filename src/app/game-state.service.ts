import { Injectable } from '@angular/core';

import { GameUiElement } from './game-ui-element';
import { GameUiElementButton as UiButton } from './game-ui-element-button';
import { GameUiElementText as UiText } from './game-ui-element-text';

@Injectable()
export class GameStateService {

  constructor() { }

  getUiElements() : GameUiElement[] {
    return this.ui_elements;
  }

  ui_elements: GameUiElement[] = [
    new UiText("hello world"),
    new UiButton("spook", () => { alert("boo"); return; }),
    new UiButton("knock-knock", () => {
      this.addText("who's there?");
    }),
    new UiButton("remove first", () => {
      this.removeFirst();
    })
  ];
  
  addText(text: string): void {
    this.ui_elements.push(new UiText(text));
  }

  removeFirst() : void {
    this.ui_elements.shift();
  }
}
