import { Ui } from "./views/components/ui";
import { App } from "./views/components/app";

console.log("WORKS");

const container = document.querySelector('.ui');

const ui = new Ui();
const app = new App();
container.prepend(ui.element());

ui.getHeader().sigSearch.connect(async query => {
    const results = await app.search(query);
    ui.getResults().setResults(results);
});

ui.getResults().sigRecipeClicked.connect(async result => {
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