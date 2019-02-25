import { Widget, element } from "../util/widget";
import { Signal } from "../util/signal";
import { Recipe } from "../index";

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