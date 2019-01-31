import { Widget, element } from "./widget";
import { Shopping } from "./shoppingList";

export class RightPanel implements Widget {

    private el: HTMLElement;
    private shopping: Shopping;

    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`<div class="shopping">`);
            this.shopping = new Shopping();
            this.el.appendChild(this.shopping.element());
        }
        return this.el;
    }
}