import { Result } from "./leftPanel";
import axios from 'axios';
import { key, proxy } from '../../config';
import { exampleResults, exampleRecipe } from './seed';

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

