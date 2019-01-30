import { Widget, element } from "./widget";

export class SearchForm implements Widget {

    private el: HTMLElement;
    private button: HTMLElement;
    private input: HTMLElement;

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
                console.log('Form submitted');
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