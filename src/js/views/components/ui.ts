import { Widget, element } from "./widget";
import { Header } from "./header";
import { Results } from "./results";
import { Recipes } from "./recipe";
import { Shopping } from "./shoppingList";

export class Ui implements Widget {

    private el: HTMLElement;

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`<div class="container"></div>`);
            const container = document.querySelector('.container');

            const header = new Header();
            const results = new Results();
            const recipe = new Recipes();
            const shopping = new Shopping();

            container.prepend(header.element());
            container.prepend(results.element());
            container.prepend(shopping.element());
            container.prepend(recipe.element());
            
        }
        return this.el;
    }
}