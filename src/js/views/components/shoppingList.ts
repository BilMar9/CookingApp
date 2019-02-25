import { Widget, element } from "./widget";
import { Recipe, IngredientItem, App } from "./app";

export class Shopping implements Widget {

    private el: HTMLElement;
    private copyright: HTMLElement;
    private header: HTMLElement;
    private shoppingList: HTMLElement;
    private ingredients = new Map<string, IngredientItem>();
    private shortener = new Map<string, string>([
        ['tablespoons', 'tbsp'],
        ['tablespoon', 'tbsp'],
        ['ounces', 'oz'],
        ['ounce', 'oz'],
        ['teaspoons', 'tsp'],
        ['teaspoon', 'tsp'],
        ['pounds', 'pound'],
        ['kilograms', 'kg'],
        ['grams', 'g'],
        ['cups', 'cup'],
    ]);
    
    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`
                <div class="shopping">
                    <h2 class="heading-2">My Shopping List</h2>
                    <ul class="shopping__list"></ul>
                </div>
            `);
        }
        return this.el;
    }

    addRecipe(recipe: Recipe): void {
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
        this.el.innerHTML = "";
        this.header = element(`<h2 class="heading-2">My Shopping List</h2>`);
        this.shoppingList = element(`<ul class="shopping__list"></ul>`);
        this.copyright = element(`
            <div class="copyright">
                &copy; by Jonas Schmedtmann. Powered by
                    <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>
            </div>
        `);
        this.ingredients.forEach(ingredient => {  
            const shoppingItem = element(`
                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="text" value="${ingredient.count.toFixed(2)}" step="1">
                        <p>${this.shortener.get(ingredient.unit) ? this.shortener.get(ingredient.unit) : ""}</p>
                    </div>
                    <p class="shopping__description">${ingredient.name}</p>
                </li>
            `);
            const deleteBtn = element(`
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>
            `);
            deleteBtn.addEventListener("click", () => {
                this.shoppingList.removeChild(shoppingItem);
            });
            shoppingItem.appendChild(deleteBtn);
            this.shoppingList.appendChild(shoppingItem);
        });
        this.el.appendChild(this.header);
        this.el.appendChild(this.shoppingList);
        this.el.appendChild(this.copyright);
    }
}