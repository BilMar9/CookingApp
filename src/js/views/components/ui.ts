import { Widget, element } from "./widget";
import { Header } from "./header";
import { Results } from "./results";
import { Recipes } from "./recipe";
import { Shopping } from "./shoppingList";


export class Ui implements Widget {

    private el: HTMLElement;
    private header: Header;
    private results: Results;
    private recipe: Recipes;

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`<div class="container"></div>`);

            this.header = new Header();
            this.results = new Results();
            this.recipe = new Recipes();
            const shopping = new Shopping();

            
            this.el.append(this.header.element());
            this.el.append(this.results.element());
            this.el.append(this.recipe.element());
            this.el.append(shopping.element());
        }
        return this.el;
    }

    getHeader(): Header {
        return this.header;
    }

    getResults(): Results {
        return this.results;
    }

    getRecipes(): Recipes {
        return this.recipe;
    }
}