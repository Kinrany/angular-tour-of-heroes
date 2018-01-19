import { Component, OnInit } from '@angular/core';

import { GameUiElement } from '../game-ui-element';
import { GameUiElementButton as UiButton } from '../game-ui-element-button';
import { GameUiElementText as UiText } from '../game-ui-element-text';

@Component({
  selector: 'game-root',
  templateUrl: './game-root.component.html',
  styleUrls: ['./game-root.component.css']
})
export class GameRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ui_elements: GameUiElement[] = [
    new UiText("hello world"),
    new UiButton("spook", () => { alert("boo"); return; }),
    new UiButton("knock-knock", () => {
      this.addText("who's there?");
    })
  ];

  addText(text: string): void {
    this.ui_elements.push(new UiText(text));
  }
}
