import { Widget, element } from "./widget";

export class Results implements Widget {

    private el: HTMLElement;
    
    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`
            <div class="results">
                <ul class="results__list">
                    <li>
                        <a class="results__link results__link--active" href="#23456">
                            <figure class="results__fig">
                                <img src="img/test-1.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Pasta with Tomato ...</h4>
                                <p class="results__author">The Pioneer Woman</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="results__link" href="#76767">
                            <figure class="results__fig">
                                <img src="img/test-2.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Pasta Salad with ...</h4>
                                <p class="results__author">Spicy Perspective</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="results__link" href="#85354">
                            <figure class="results__fig">
                                <img src="img/test-3.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Homemade Tomato ...</h4>
                                <p class="results__author">All Recipes</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="results__link" href="#43563">
                            <figure class="results__fig">
                                <img src="img/test-4.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Pasta with Tomato ...</h4>
                                <p class="results__author">The Pioneer Woman</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="results__link" href="#2256665">
                            <figure class="results__fig">
                                <img src="img/test-5.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Greek Pasta with ...</h4>
                                <p class="results__author">Chow</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="results__link" href="#7567567">
                            <figure class="results__fig">
                                <img src="img/test-9.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Cherry tomato, kale ...</h4>
                                <p class="results__author">BBC Good Food</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="results__link" href="#5676577">
                            <figure class="results__fig">
                                <img src="img/test-7.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Pasta with Fresh ...</h4>
                                <p class="results__author">Chow</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="results__link" href="#98798">
                            <figure class="results__fig">
                                <img src="img/test-8.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Buttery Tomato Pasta ...</h4>
                                <p class="results__author">Simply Recipes</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="results__link" href="#5464646456">
                            <figure class="results__fig">
                                <img src="img/test-10.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Pesto Pasta Salad ...</h4>
                                <p class="results__author">Eats Well With Others</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a class="results__link" href="#345345435">
                            <figure class="results__fig">
                                <img src="img/test-6.jpg" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">Pasta with Roasted ...</h4>
                                <p class="results__author">Two Peas and Their Pod</p>
                            </div>
                        </a>
                    </li>
                </ul>
            `);
        } 
        return this.el;
    }
}

// <div class="results__pages">
// <!--
// <button class="btn-inline results__btn--prev">
//     <svg class="search__icon">
//         <use href="img/icons.svg#icon-triangle-left"></use>
//     </svg>
//     <span>Page 1</span>
// </button>
// <button class="btn-inline results__btn--next">
//     <span>Page 3</span>
//     <svg class="search__icon">
//         <use href="img/icons.svg#icon-triangle-right"></use>
//     </svg>
// </button>
// -->
// </div>