import { Widget, element } from "./widget";
import { Header } from "./header";
import { Results } from "./results";
import { Recipes } from "./middlePanel";
import { Shopping } from "./shoppingList";
import { Likes } from "./likes";


export class Ui implements Widget {

    private el: HTMLElement;
    private header: Header;
    private results: Results;
    private recipe: Recipes;
    private shopping: Shopping;
    private likes: Likes;

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`<div class="container"></div>`);

            this.header = new Header();
            this.results = new Results();
            this.recipe = new Recipes();
            this.shopping = new Shopping();
            this.likes = new Likes();

            this.el.append(this.header.element());
            this.el.append(this.results.element());
            this.el.append(this.recipe.element());
            this.el.append(this.shopping.element());
            this.el.append(this.likes.element());
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

    getShopList(): Shopping {
        return this.shopping;
    }
    getLikes(): Likes {
        return this.likes;
    }
}