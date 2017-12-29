import {Component, Input} from "@angular/core";

import {ModalService} from "../../modal.service";

@Component({
    selector: "ak-modal-notification",
    templateUrl: "./modal-notification.component.html"
})
export class ModalNotificationComponent {
    @Input()
    public message: string;

    constructor(private modalService: ModalService) {}

    public close(): void {
        this.modalService.close();
    }
}
