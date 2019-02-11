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
            const pages = element(`
            <div class="results__pages">
            </div>
        `)
        this.el.appendChild(pages);
        } 
        return this.el;
    }

    setResults(results: Result[]): void {
        this.el.innerHTML = "";
            console.log(results.length);
        const pagesBtn = element(`
            <button class="btn-inline results__btn--prev">
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-left"></use>
                </svg>
                <span>Page 1</span>
            </button>
            <button class="btn-inline results__btn--next">
                <span>Page 3</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-right"></use>
                </svg>
            </button>
        `);
        pagesBtn.addEventListener("click", () => {
            console.log("Clicked Btn Page");
        });
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
        this.el.appendChild(pagesBtn);
    }
}