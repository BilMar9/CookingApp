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
    sigLeftPanelLoader = new Signal<void>();
    private el: HTMLElement;
    private results: Result[];
    private resultsPerPage = 8;
    private currentPage = 0;
    type: string;
    limit: number

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
    
    addLoaderButton() {
        const loader = 'loader';
        const addLoader = element(`
            <div class="${loader}">
                <svg>
                    <use href="img/icons.svg#icon-cw"></use>
                </svg>
            </div>
        `);
        this.el.appendChild(addLoader);
    }

    addButton () {
        const maxPageLimit = Math.ceil(this.results.length / this.resultsPerPage);
        const firstPageDisabled = !this.currentPage;
        const lastPageDisabled = this.currentPage === maxPageLimit - 1;
        const pagesBtn = element(`
            <div class="results__pages"></div>
        `);
        
        if(!firstPageDisabled) {
            const leftBtn = element(`
                <button class="btn-inline results__btn--prev" ${firstPageDisabled ? "disabled" : ""}>
                    <span>Page ${this.currentPage}</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                </button>
            `);
        leftBtn.addEventListener("click", () => {
            this.currentPage = this.currentPage - 1;
            this.updateLeftPanel();
        });

            pagesBtn.appendChild(leftBtn);
        }
        if(!lastPageDisabled) {
            const rightBtn = element(`
                <button class="btn-inline results__btn--next" ${lastPageDisabled ? "disabled" : ""}>
                    <span>Page ${this.currentPage + 2}</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>
            `);
        rightBtn.addEventListener("click", () => {
            this.currentPage = this.currentPage + 1;
            this.updateLeftPanel();
        });
        pagesBtn.appendChild(rightBtn);
        }
        this.el.appendChild(pagesBtn);
    }

    private updateLeftPanel() {
        this.el.innerHTML = "";

        const start = this.currentPage * this.resultsPerPage;
        const end = start + this.resultsPerPage;
        const currentPageResults = this.results.slice(start, end);

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
                                <!-- r.title.split('').length > 17 ? r.title.substring(0, 16) : r.title -->
                                <p class="results__author">${r.publisher}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            `);
            recipe.addEventListener("click", () => {
                this.sigRecipeClicked.emit(r);
                this.sigLeftPanelLoader.emit();
            });
            this.el.appendChild(recipe);
        });
        this.addButton(); 
    }
}