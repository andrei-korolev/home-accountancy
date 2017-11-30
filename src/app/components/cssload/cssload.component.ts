import {Component, Input} from "@angular/core";

@Component({
    selector: "ak-cssload",
    templateUrl: "./cssload.component.html"
})
export class CssloadComponent {
    @Input()
    public field: boolean;
}
