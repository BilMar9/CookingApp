import { Widget, element } from "../util/widget";
import { Signal } from "../util/signal";
import { Recipe } from "../index";

export class Header implements Widget {

    sigSearch = new Signal<string>();
    sigLike = new Signal<void>();
    private el: HTMLElement;
    private logo: HTMLElement;
    private searchForm: HeaderSearchForm;
    private likes: HeaderLikes;
    
    getLikes(): HeaderLikes {
        return this.likes;
    }

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`<header class="header"></header>`);
            this.logo = element(`<img src="img/logo.png" alt="Logo" class="header__logo">`);
            this.el.appendChild(this.logo);
            this.searchForm = new HeaderSearchForm();
            this.searchForm.sigSearch.connect((query: string) => {
                this.sigSearch.emit(query);
            });
            this.el.appendChild(this.searchForm.element());
            this.likes = new HeaderLikes();
            this.likes.sigLike.connect(() => {
                this.sigLike.emit();
            });
            this.el.appendChild(this.likes.element());
        }
        return this.el;
    }
}

export class HeaderSearchForm implements Widget {

    private el: HTMLElement;
    private button: HTMLElement;
    private input: HTMLElement;
    sigSearch = new Signal<string>();

    element(): HTMLElement {
        if (!this.el) {
            this.button = element(`
                <button class="btn search__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-magnifying-glass"></use>
                    </svg>
                    <span>Search</span>
                </button>
            `);
            this.input = element(`<input type="text" class="search__field" placeholder="Search over 1,000,000 recipes...">`);
            this.button.addEventListener("click", (event) => {
                event.preventDefault();
                const input = this.input as HTMLInputElement;
                this.sigSearch.emit(input.value);
                input.value = "";
            });

            this.el = element(`
                <form class="search">
                </form>
            `);

            this.el.appendChild(this.input);
            this.el.appendChild(this.button);
        }
        return this.el;
    }
}

export class HeaderLikes implements Widget {

    sigLike = new Signal<Recipe>();
    private el: HTMLElement;
    private icon: HTMLElement;
    private list: HTMLElement
    private ul: HTMLElement;

    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`
                <div class="likes">
                </div>
            `);
            this.icon = element(`
                <div class="likes__field">
                    <svg class="likes__icon">
                        <use href="img/icons.svg#icon-heart"></use>
                    </svg>
                </div>`
            );
            this.icon.addEventListener("click", () => {
                this.sigLike.emit();
            });
            this.list = element(`
                <div class="likes__panel">
                </div>
            `);
            this.ul = element(`
                <ul class="likes__list">
                </ul>
            `);
            
           this.el.appendChild(this.icon);
           this.el.appendChild(this.list);
           this.list.appendChild(this.ul);

        }
        return this.el;
    }
    addRecipeHeart(r: Recipe): void {
        const liked = element(`
            <li>
                <a class="likes__link" href="${r.recipe_id}">
                    <figure class="likes__fig">
                        <img src="${r.image_url}" alt="Test">
                    </figure>
                    <div class="likes__data">
                        <h4 class="likes__name">${r.title}</h4>
                        <p class="likes__author">${r.publisher}</p>
                    </div>
                </a>
            </li>
        `);
        this.ul.appendChild(liked);
    }
}
   