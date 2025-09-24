import { bindable, customElement } from 'aurelia'

export class Card {
    @bindable header = "";
    @bindable description = ""
    @bindable img = undefined;
    @bindable alt = undefined;
}