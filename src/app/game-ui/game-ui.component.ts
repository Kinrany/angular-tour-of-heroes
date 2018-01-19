import { Component, OnInit, Input } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'game-ui',
  templateUrl: './game-ui.component.html',
  styleUrls: ['./game-ui.component.css']
})
export class GameUiComponent implements OnInit {

  constructor(private gameStateService: GameStateService) { }

  ngOnInit() {
  }
  
}
