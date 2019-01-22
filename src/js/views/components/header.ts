import { Widget, element } from "./widget";
import { SearchForm } from "./searchForm";

export class Header implements Widget {

    private el: HTMLElement;
    private logo = element(`<img src="img/logo.png" alt="Logo" class="header__logo">`);
    private searchForm = new SearchForm();

    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`<header class="header"></header>`);

            this.el.appendChild(this.logo);
            this.el.appendChild(this.searchForm.element());
        }
        return this.el;
    }
}