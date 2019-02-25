import { Widget, element } from "../util/widget";
import { Header } from "./header";
import { LeftPanel } from "./leftPanel";
import { MiddlePanel } from "./middlePanel";
import { RightPanel } from "./rightPanel";

export class Ui implements Widget {

    private el: HTMLElement;
    private header: Header;
    private results: LeftPanel;
    private recipe: MiddlePanel;
    private shopping: RightPanel;

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`<div class="container"></div>`);

            this.header = new Header();
            this.results = new LeftPanel();
            this.recipe = new MiddlePanel();
            this.shopping = new RightPanel();

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

    getRecipes(): MiddlePanel {
        return this.recipe;
    }

    getShopList(): RightPanel {
        return this.shopping;
    }
}