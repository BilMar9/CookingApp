import { Widget, element } from "./widget";
import { SearchForm } from "./searchForm";
import { Likes } from "./likes";
import { Signal } from "../../util/signal";

export class Header implements Widget {

    sigSearch = new Signal<string>();
    sigLike = new Signal<void>();
    private el: HTMLElement;
    private logo: HTMLElement;
    private searchForm: SearchForm;
    private likes: Likes;
    
    getLikes(): Likes {
        return this.likes;
    }

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`<header class="header"></header>`);
            this.logo = element(`<img src="img/logo.png" alt="Logo" class="header__logo">`);
            this.el.appendChild(this.logo);
            this.searchForm = new SearchForm();
            this.searchForm.sigSearch.connect((query: string) => {
                this.sigSearch.emit(query);
            });
            this.el.appendChild(this.searchForm.element());
            this.likes = new Likes();
            this.likes.sigLike.connect(() => {
                this.sigLike.emit();
            });
            this.el.appendChild(this.likes.element());
        }
        return this.el;
    }
}
   