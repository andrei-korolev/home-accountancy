import {Component, EventEmitter, Input, Output} from "@angular/core";

import {DropdownModel} from "./dropdown.model";

@Component({
    selector: "ak-dropdown",
    templateUrl: "./dropdown.component.html"
})
export class DropdownComponent {
    @Input()
    public menu: DropdownModel[];

    @Output()
    public onItemSelect: EventEmitter<DropdownModel> = new EventEmitter();

    public onClick(item: DropdownModel): void {
        this.onItemSelect.emit(item);
    }
}
