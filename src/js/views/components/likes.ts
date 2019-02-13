import { Widget, element } from "./widget";
import { Signal } from "../../util/signal";
import { Recipe } from "./app";

export class Likes implements Widget {

    private el: HTMLElement;
    private icon: HTMLElement;
    private list: HTMLElement
    sigLike = new Signal<Recipe>();
   

    element(): HTMLElement {
        if (!this.el) {
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
            this.el = element(`
                <div class="likes">
                </div>
            `);
            this.el.appendChild(this.icon);
            this.el.appendChild(this.list);
        }
        return this.el;
    }
    addRecipeHeart(r: Recipe): void {
        const list = element(`
            <ul class="likes__list">
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
            </ul>
        `);
        this.el.appendChild(list);
    }
}