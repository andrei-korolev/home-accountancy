import {Component, Input} from "@angular/core";

import {toggleMessageTrigger} from "./message.animations";

@Component({
    selector: "ak-message",
    templateUrl: "./message.component.html",
    animations: [
        toggleMessageTrigger
    ]
})
export class MessageComponent {
    @Input()
    public type: "danger";

    @Input()
    public text: string;
}
