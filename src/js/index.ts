import { Ui } from "../js/ui/ui";
import axios from 'axios';
import { key, proxy } from './config';
import { exampleResults, exampleRecipe } from "../js/util/seed";

export interface IngredientItem {

    count: number;
    unit: string;
    name: string;
    
}

export interface Recipe {

    publisher: string;
    f2f_url: string;
    title: string;
    source_url: string;
    recipe_id: number;
    image_url: string;
    social_rank: number;
    publisher_url: string;
    ingredients: IngredientItem[];
    calcTime: number;
    calcServings: number

}

export interface Result {

    recipe_id: number;
    image_url: string;
    title: string;
    publisher: string;
}

export class App {

    private testModeOn = true;
    result: any;
    query: any;
    ingredients: any;

    search(query: string): Promise<Result[]> {
        return new Promise((resolve, reject) => {
            if (!this.testModeOn) {
                axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`).then(result => {
                    resolve(result.data.recipes);

                });
            } else {
                resolve(exampleResults);
            }
        });
    }
    
    getRecipe(result: Result): Promise<Recipe> {
        return new Promise((resolve, reject) => {
            if(!this.testModeOn) {
                axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${result.recipe_id}`).then(recipe => {
                    resolve(recipe);
                });
            } else {
                resolve(exampleRecipe);
            }
        });
    }
}

console.log("WORKS");

const container = document.querySelector('.ui');

const ui = new Ui();
const app = new App();
container.prepend(ui.element());

ui.getHeader().sigSearch.connect(async query => {
    ui.getResults().addLoaderButton();
    const results = await app.search(query);
    ui.getResults().setResults(results);
});

ui.getResults().sigRecipeClicked.connect(async result => {
    ui.getRecipes().addLoaderButton();
    await app.getRecipe(result);
    const recipe = await app.getRecipe(result);
    ui.getRecipes().setRecipe(recipe);
    ui.getRecipes().updateHtml();
});

ui.getRecipes().sigAddShoppingButtonClicked.connect(recipe => {
    ui.getShopList().addRecipe(recipe);
});

ui.getRecipes().sigHeartClicked.connect(recipe => {
    ui.getHeader().getLikes().addRecipeHeart(recipe);
});