import {Component, Input} from "@angular/core";

@Component({
    selector: "ak-common-panel",
    templateUrl: "./common-panel.component.html"
})
export class CommonPanelComponent {
    @Input()
    public title: string;
}
