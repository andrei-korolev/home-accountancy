import {Component, Input} from "@angular/core";

@Component({
    selector: "ak-layout-page",
    templateUrl: "./layout-page.component.html"
})
export class LayoutPageComponent {
    @Input()
    public title: string;
}
