import { Widget, element } from "./widget";
import { Recipe, IngredientItem } from "./app";

export class Shopping implements Widget {

    private el: HTMLElement;
    private copyright: HTMLElement;
    private ingredients = new Map<string, IngredientItem>();
    
    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`
                <div class="shopping"></div>
            `);
        }
        return this.el;
    }

    addIngredient(recipe: Recipe): void {
        recipe.ingredients.forEach(i => {
            if(this.ingredients.get(i.name)){
               const previousValue = this.ingredients.get(i.name);
               const newValue = {
                   count: previousValue.count + i.count,
                   unit: previousValue.unit,
                   name: previousValue.name,
               };
               this.ingredients.set(i.name, newValue);
            }
            else {
                this.ingredients.set(i.name, i);
            }
        });

        this.update();
    };

    update(): void {
        // prekresli cele odznova
        this.el.innerHTML = "";
        this.ingredients.forEach(ingredient => {
            const input = 
                element(`
                <input type="number" value="${ingredient.count}" step="1">
            `);
            const shopping =
                element(`
                    <li class="shopping__item">
                        <div class="shopping__count">
                        ${input}</div>
                            <p>${ingredient.unit}</p>
                            <p class="shopping__description">${ingredient.name}</p>
                        <button class="shopping__delete btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-cross"></use>
                            </svg>
                        </button>
                    </li>
                `);
            this.el.prepend(shopping);
            document.querySelector(".shopping__count").append(input);
            // input.addEventListener("change", () => {
            //     console.log(input);
            // });
        });
        this.copyright = element(`
            <div class="copyright">
                &copy; by Jonas Schmedtmann. Powered by
                    <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>
            </div>`);
        this.el.appendChild(this.copyright);
    }
}