import { Result } from "./results";
import axios from 'axios';
import { key, proxy } from '../../config';

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
                const exampleResults: Result[] = [
                    {
                        recipe_id: 47746,
                        image_url: "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",
                        title: "Best Pizza Dough Ever",
                        publisher: "101 Cookbooks"
                    },
                    {
                        recipe_id: 41470,
                        image_url: "http://static.food2fork.com/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
                        title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
                        publisher: "Closet Cooking"
                    },
                    {
                        recipe_id: 46895,
                        image_url: "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",
                        title: "Pepperoni Pizza Burgers",
                        publisher: "The Pioneer Woman"
                    }
                ];
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
                const ingredients = [
                    "2 jalapeno peppers, cut in half lengthwise and seeded",
                    "2 grams slices sour dough bread", 
                    "1 tablespoon butter, room temperature", 
                    "1/2 cups jack and cheddar cheese, shredded",
                    "1 tablespoons tortilla chips, crumbled",
                ];

                const newIngredients = ingredients.map((i: string) => {
                    const splitted = i.split(" ");
                    const parsed = {
                        count: eval(splitted.shift()),
                        unit: splitted.shift(),
                        name: splitted.join(" "),
                    };
                    return parsed;
                });

                const exampleRecipe: Recipe = {
                    
                    publisher: "The Pioneer Woman",
                    f2f_url: "http://food2fork.com/view/46956",
                    title: "Deep Dish Fruit Pizza",
                    source_url: "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
                    recipe_id: 46956,
                    image_url: "http://static.food2fork.com/fruitpizza9a19.jpg",
                    social_rank: 100,
                    publisher_url: "http://thepioneerwoman.com",
                    ingredients: newIngredients,
                    calcTime: 45,
                    calcServings: 4
                
                };
                resolve(exampleRecipe);
            }
        });
    }
}

