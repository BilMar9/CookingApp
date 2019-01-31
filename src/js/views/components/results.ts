import { Widget, element } from "./widget";

export class Results implements Widget {

    private el: HTMLElement;
    
    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`
            <div class="results">

            </div>
            `);
        } 
        return this.el;
    }

    setResults(results: Result[]): void {
        this.el.innerHTML = "";
        results.forEach(r => {
            this.el.appendChild(
                element(`
                <ul class="results__list"></ul>
            `);
        } 
        return this.el;
    }
}