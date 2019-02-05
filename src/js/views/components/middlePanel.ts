import { Widget, element } from "./widget";
import { Recipes } from  "./recipe";

export class MiddlePanel implements Widget {

    private el: HTMLElement;
    private recipe: Recipes;

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`<div class="recipe"></div>`);
            this.recipe = new Recipes();
            this.el.appendChild(this.recipe.element());
        }
        return this.el;
    }
}