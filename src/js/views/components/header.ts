import { Widget, element } from "./widget";
import { SearchForm } from "./searchForm";
import { Likes } from "./likes";

export class Header implements Widget {

    private el: HTMLElement;
    private logo: HTMLElement;
    private searchForm: SearchForm;
    private likes: Likes;

    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`<header class="header"></header>`);

            this.logo = element(`<img src="img/logo.png" alt="Logo" class="header__logo">`);
            this.el.appendChild(this.logo);
            this.searchForm = new SearchForm();
            this.el.appendChild(this.searchForm.element());
            this.likes = new Likes();
            this.el.appendChild(this.likes.element());
        }
        return this.el;
    }
}