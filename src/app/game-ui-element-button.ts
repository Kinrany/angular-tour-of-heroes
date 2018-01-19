import { GameUiElement } from './game-ui-element';

export class GameUiElementButton implements GameUiElement {
    constructor(label: string, click: () => any) {
        this.type = "button";
        this.label = label;
        this.click = click;
    }

    type: string;
    label: string;
    click: () => any;
}