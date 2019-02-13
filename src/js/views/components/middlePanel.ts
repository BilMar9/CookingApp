import { Widget, element } from "./widget";
import { Signal } from "../../util/signal";
import { Recipe } from "./app";

export class Recipes implements Widget {

    private el: HTMLElement;
    private recipe: Recipe;
    time: number;
    sigAddShoppingButtonClicked = new Signal<Recipe>();
    sigHeartClicked = new Signal<Recipe>();

    element(): HTMLElement {
        if(!this.el) {
            this.el = element(`
                <div class="recipe"></div>
            `);
        }
        return this.el;
    };
    
    setRecipe(r: Recipe): void {
        this.recipe = r;
        this.updateTime();
    };

    updateServingsPlus () {
        // Servings
        const newServings = 'dec' ? this.recipe.calcServings + 1 : this.recipe.calcServings - 1;
        // Ingredients
        this.recipe.ingredients.forEach((ing: { count: number} ) => {
            ing.count *= (newServings / this.recipe.calcServings);
        });
        this.recipe.calcServings = newServings;
    }
    updateServingsMinus () {
        // Servings
        const newServings = 'dec' ? this.recipe.calcServings - 1 : this.recipe.calcServings + 1;
        // Ingredients
        this.recipe.ingredients.forEach((ing: { count: number} ) => {
            ing.count *= (newServings / this.recipe.calcServings);
        });
        this.recipe.calcServings = newServings;
    }
    updateTime() {
        const numIng = this.recipe.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }
    updateHtml() {
        this.el.innerHTML = "";

        const recipeHtml = element(`
            <figure class="recipe__fig">
                <img src="${this.recipe.image_url}" alt="Tomato" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${this.recipe.title}</span>
                </h1>
            </figure>
        `);
        const heart = element(`
            <button class="recipe__love">
                <svg class="header__likes">
                    <use href="img/icons.svg#icon-heart-outlined"></use>
                </svg>
            </button>
        `);
       heart.addEventListener("click", () => {
            this.sigHeartClicked.emit(this.recipe);
            console.log(this.recipe);
        });

        const plusBtn = element(`
            <button class="btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-plus"></use>
                </svg>
            </button>
            
        `);
        plusBtn.addEventListener("click", () => {
            this.updateServingsPlus();
            this.updateHtml();
        });

        const minusBtn = element(`
            <button class="btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-minus"></use>
                </svg>
            </button>
        `);
        minusBtn.addEventListener("click", () => {
            this.updateServingsMinus();
            this.updateHtml();
        });
        const recipeDetails = element(`
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${this.time}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${this.recipe.calcServings}</span>
                    <span class="recipe__info-text"> servings</span>
                    <div class="recipe__info-buttons"></div>
                </div>
            </div>
        `);
        this.el.appendChild(recipeDetails).appendChild(plusBtn);
        this.el.appendChild(recipeDetails).appendChild(minusBtn);
        this.el.appendChild(recipeDetails).appendChild(heart);
        
        const recipeIngredients = this.recipe.ingredients.map(i => {
            return element (`
                <li class="recipe__item">
                    <svg class="recipe__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__count">${i.count}</div>
                    <div class="recipe__ingredient">
                        <span class="recipe__unit">${i.unit}</span>
                        ${i.name}
                    </div>
                </li>
            `);
        });
        const ingredientsHtml = element(`
            <div class="recipe__ingredients">
            </div>
        `);
        const ingredientsList = element(`
            <ul class="recipe__ingredient-list">
            </ul>`
        );
        ingredientsHtml.appendChild(ingredientsList);
        recipeIngredients.forEach(i => {
            ingredientsList.appendChild(i);
        });
         
        const addShoppingBtn = element(`
            <button class="btn-small recipe__btn">
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-shopping-cart"></use>
                </svg>
                <span>Add to shopping list</span>
            </button>
        `);

        addShoppingBtn.addEventListener('click', () => {
            this.sigAddShoppingButtonClicked.emit(this.recipe);
        });

        const recipeDirections = element(`
            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </a>
            </div>
        `);

        this.el.appendChild(recipeHtml);
        this.el.appendChild(recipeDetails);
        this.el.appendChild(ingredientsHtml).appendChild(addShoppingBtn);
        this.el.appendChild(recipeDirections);
    };
}