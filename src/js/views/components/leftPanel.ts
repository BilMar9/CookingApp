import { Widget, element } from "./widget";
import { ResultsForm } from "./resultsForm";

export class LeftPanel implements Widget {

    private el: HTMLElement;
    private resultsForm: ResultsForm;

    element(): HTMLElement {
        if (!this.el) {
            this.el = element(`<div class="results">`);
            this.resultsForm = new ResultsForm();
            this.el.appendChild(this.resultsForm.element());
        }
        return this.el;
    }
}
