import { GameUiElement } from './game-ui-element';

export class GameUiElementText implements GameUiElement {
    constructor(text: string) {
        this.type = "text";
        this.text = text;
    }

    type: string;
    text: string;
}