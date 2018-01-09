import {Component, Input, OnInit} from "@angular/core";

import {ProgressBarType} from "./progress-bar.type";

@Component({
    selector: "ak-progress-bar",
    templateUrl: "./progress-bar.component.html"
})
export class ProgressBarComponent implements OnInit {
    public type: ProgressBarType;

    @Input()
    public title: string;

    @Input()
    public value: number;

    public ngOnInit(): void {
        const TYPES: any = {
            success: "success",
            danger: "danger",
            warning: "warning"
        };

        this.type = (this.value < 60) ? TYPES.success : (this.value === 100) ? TYPES.danger : TYPES.warning;
    }
}
