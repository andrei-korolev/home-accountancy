import {Component, Input} from "@angular/core";

import {ProgressBarType} from "./progress-bar.type";

@Component({
    selector: "ak-progress-bar",
    templateUrl: "./progress-bar.component.html"
})
export class ProgressBarComponent {
    @Input()
    public title: string;

    @Input()
    public type: ProgressBarType;

    @Input()
    public value: number;
}
