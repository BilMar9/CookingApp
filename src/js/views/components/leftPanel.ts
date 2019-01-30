import { Widget, element } from "./widget";
import { Results } from "./results";

export class LeftPanel implements Widget {

    private el: HTMLElement;
    private results: Results;

    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`<div class="results">`);
            this.results = new Results();
            this.el.appendChild(this.results.element());
        }
        return this.el;
    }
}
