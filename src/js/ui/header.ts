import { Widget, element } from "../util/widget";
import { HeaderSearchForm } from "./headerSearchForm";
import { HeaderLikes } from "./headerLikes";
import { Signal } from "../util/signal";

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
   