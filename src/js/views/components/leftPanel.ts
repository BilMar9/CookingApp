import { Widget, element } from "./widget";
import { Signal } from "../../util/signal";

export interface Result {

    recipe_id: number;
    image_url: string;
    title: string;
    publisher: string;
}

export class LeftPanel implements Widget {

    sigRecipeClicked = new Signal<Result>();
    private el: HTMLElement;
    private results: Result[];
    private resultsPerPage = 6;
    private currentPage = 1;
    type: string

    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`
                <div class="results"></div>
            `);
        } 
        return this.el;
    }

    setResults(results: Result[]): void {
        this.results = results;
        this.updateLeftPanel();
    }

    private updateLeftPanel() {
        this.el.innerHTML = "";
        if (this.currentPage === 1) {
            const currentPageResults = this.results.slice(this.currentPage, this.resultsPerPage + 1);
            currentPageResults.forEach(r => {
            const recipe = element(`
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
        } else if (this.currentPage === 2) {
            const currentPageResults = this.results.slice(this.currentPage * this.resultsPerPage, this.currentPage * this.resultsPerPage + this.resultsPerPage);
            currentPageResults.forEach(r => {
                const recipe = element(`
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
        } else {
            const currentPageResults = this.results.slice(this.currentPage * this.resultsPerPage, this.currentPage * this.resultsPerPage + this.resultsPerPage);
            currentPageResults.forEach(r => {
                const recipe = element(`
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
    
        const pagesBtn = element(`
            <div class="results__pages"></div>
        `);

        const leftBtn = element(`
            <button class="btn-inline results__btn--prev">
                <span>Page ${this.type === 'prev' ? this.currentPage + 1 : this.currentPage - 1}</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-left"></use>
                </svg>
            </button>
        `);
        leftBtn.addEventListener("click", () => {
            this.currentPage = this.currentPage - 1;
            this.updateLeftPanel();
        });

        const rightBtn = element(`
            <button class="btn-inline results__btn--next">
                <span>Page ${this.type === 'next' ? this.currentPage - 1 : this.currentPage + 1}</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-right"></use>
                </svg>
            </button>
        `);
        rightBtn.addEventListener("click", () => {
            this.currentPage = this.currentPage + 1;
            this.updateLeftPanel();
        });

        this.el.appendChild(pagesBtn);
        pagesBtn.appendChild(leftBtn);
        pagesBtn.appendChild(rightBtn);
    }
}