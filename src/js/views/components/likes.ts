import { Widget, element } from "./widget";

export class Likes implements Widget {

    private el: HTMLElement;

    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`
            <div class="likes">
                <div class="likes__field">
                    <svg class="likes__icon">
                        <use href="img/icons.svg#icon-heart"></use>
                    </svg>
                </div>
                <div class="likes__panel">
                    <ul class="likes__list">
                        <!--
                        <li>
                            <a class="likes__link" href="#23456">
                                <figure class="likes__fig">
                                    <img src="img/test-1.jpg" alt="Test">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">Pasta with Tomato ...</h4>
                                    <p class="likes__author">The Pioneer Woman</p>
                                </div>
                            </a>
                        </li>
                        -->
                    </ul>
                </div>
            </div>
            `);
        }
        return this.el;
    }
}