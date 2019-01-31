import { Widget, element } from "./widget";

interface Result {
    
    id: number;
    img: string;
    name: string;
    author: string

}

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
                    <li>
                        <a class="results__link results__link--active" href="#${r.id}">
                            <figure class="results__fig">
                                <img src="${r.img}" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${r.name}</h4>
                                <p class="results__author">${r.author}</p>
                            </div>
                        </a>
                    </li>
                `)
            );
        });
    }
}