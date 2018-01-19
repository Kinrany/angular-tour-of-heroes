import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-ui',
  templateUrl: './game-ui.component.html',
  styleUrls: ['./game-ui.component.css']
})
export class GameUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  elements = [
    {
      type: "button",
      label: "this is a button"
    },
    {
      type: "text",
      text: "this is a text"
    }
  ];

}
