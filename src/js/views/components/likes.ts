import { Widget, element } from "./widget";
import { Signal } from "../../util/signal";

export class Likes implements Widget {

    private el: HTMLElement;
    private icon: HTMLElement;
    private list: HTMLElement
    sigLike = new Signal<void>();

    element(): HTMLElement {
        if (!this.el) {
            this.icon = element(`
                <div class="likes__field">
                    <svg class="likes__icon">
                        <use href="img/icons.svg#icon-heart"></use>
                    </svg>
                </div>`
            );
            this.icon.addEventListener("click", () => {
                this.sigLike.emit();
            });
            this.list = element(`
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
            `);
            this.el = element(`
                <div class="likes">
                </div>
            `);
            this.el.appendChild(this.icon);
            this.el.appendChild(this.list);
        }
        return this.el;
    }
}