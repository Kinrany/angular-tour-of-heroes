import { Component, OnInit, Input } from '@angular/core';

import { GameUiElementText } from '../game-ui-element-text';

@Component({
  selector: 'game-text',
  templateUrl: './game-text.component.html',
  styleUrls: ['./game-text.component.css']
})
export class GameTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() element : GameUiElementText;
}
