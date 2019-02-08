import { Widget, element } from "./widget";
import { Signal } from "../../util/signal";

export interface Result {

    recipe_id: number;
    image_url: string;
    title: string;
    publisher: string;
}

export class Results implements Widget {

    private el: HTMLElement;
    sigRecipeClicked = new Signal<Result>();
    
    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`
                <div class="results"></div>
            `);
        } 
        return this.el;
    }

    setResults(results: Result[]): void {
        this.el.innerHTML = "";
            console.log(results.length);
        results.forEach(r => {
            const recipe = 
                element(`
                    <ul class="results__list">
                        <li>
                            <a class="results__link results__link--active" href="#${r.recipe_id}">
                                <figure class="results__fig">
                                    <img src="${r.image_url}" alt="Test">
                                </figure>
                                <div class="results__data">
                                    <h4 class="results__name">${r.title}</h4>
                                    <p class="results__author">${r.publisher}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                `);
            recipe.addEventListener("click", () => {
                this.sigRecipeClicked.emit(r);
            });
            this.el.appendChild(recipe);
        });
    }
}