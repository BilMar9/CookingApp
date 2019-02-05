import { Result } from "./results";
import axios from 'axios';
import { key, proxy } from '../../config';


export class App {

    result: any;
    query: any;
    private testModeOn = true;

    search(query: string): Promise<Result[]> {
        return new Promise((resolve, reject) => {
            if (!this.testModeOn) {
                axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`).then(result => {
                    resolve(result.data.recipes);
                });
            } else {
                const exampleResults: Result[] = [
                    {
                        recipe_id: 1,
                        image_url: "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",
                        title: "Best Pizza Dough Ever",
                        publisher: "Moj tato"
                    },
                    {
                        recipe_id: 1,
                        image_url: "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",
                        title: "Some pizza",
                        publisher: "Tvoj tato"
                    },
                    {
                        recipe_id: 1,
                        image_url: "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",
                        title: "Napoli",
                        publisher: "Mario"
                    }
                ];
                resolve(exampleResults);
            }
        });
    }
}