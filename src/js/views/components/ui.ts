import { Widget, element } from "./widget";
import { Header } from "./header";
import { LeftPanel } from "./leftPanel";
import { Recipes } from "./middlePanel";
import { Shopping } from "./shoppingList";

export class Ui implements Widget {

    private el: HTMLElement;
    private header: Header;
    private results: LeftPanel;
    private recipe: Recipes;
    private shopping: Shopping;

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`<div class="container"></div>`);

            this.header = new Header();
            this.results = new LeftPanel();
            this.recipe = new Recipes();
            this.shopping = new Shopping();

            this.el.append(this.header.element());
            this.el.append(this.results.element());
            this.el.append(this.recipe.element());
            this.el.append(this.shopping.element());
        }
        return this.el;
    }

    getHeader(): Header {
        return this.header;
    }

    getResults(): LeftPanel {
        return this.results;
    }

    getRecipes(): Recipes {
        return this.recipe;
    }

    getShopList(): Shopping {
        return this.shopping;
    }
}