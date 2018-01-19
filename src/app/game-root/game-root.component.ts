import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './game-root.component.html',
  styleUrls: ['./game-root.component.css']
})
export class GameRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ui_elements = [
    {
      type: "button",
      label: "this is a button",
      click: function() { alert("someone clicked the button"); }
    },
    {
      type: "text",
      text: "this is a text"
    }
  ];
}
