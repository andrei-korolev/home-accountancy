import {Component, Input} from "@angular/core";

@Component({
    selector: "ak-modal-carcass",
    templateUrl: "./modal-carcass.component.html"
})
export class ModalCarcassComponent {
    @Input()
    public title: string;

    @Input()
    public subtitle: string;
}
