import { Widget, element } from "./widget";

interface Shop {
    
    value: number;
    step: number;
    description: string;
}

export class Shopping implements Widget {

    private el: HTMLElement;
    private copyright: HTMLElement;

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`
            <div class="shopping"></div>
            `);
            this.copyright = element(`
                <div class="copyright">
                    &copy; by Jonas Schmedtmann. Powered by
                        <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>
                </div>`);
            this.el.appendChild(this.copyright);
        }
        return this.el;
    }

    setShopList(results: Shop[]): void {
        this.el.innerHTML = "";
        results.forEach(r => {
            this.el.appendChild(
                element(`
                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="${r.value}" step="${r.step}">
                        <p>g</p>
                    </div>
                    <p class="shopping__description">${r.description}</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>
                `)
            )
        });
    }
}