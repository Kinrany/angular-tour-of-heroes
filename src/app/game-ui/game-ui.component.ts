import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-ui',
  templateUrl: './game-ui.component.html',
  styleUrls: ['./game-ui.component.css']
})
export class GameUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() elements: Array<{ type: string }>;
}
