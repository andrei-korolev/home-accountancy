import {Component} from "@angular/core";

import {SidebarNavigationLinkModel} from "./sidebar-navigation-link.model";

@Component({
    selector: "ak-sidebar",
    templateUrl: "./sidebar.component.html"
})
export class SidebarComponent {
    public navigation: SidebarNavigationLinkModel[] = [{
        label: "Счёт",
        icon: "calculator",
        url: "test"
    }, {
        label: "История",
        icon: "clock",
        url: "test"
    }, {
        label: "Планирование",
        icon: "archive",
        url: "test"
    }, {
        label: "Запись",
        icon: "circle-with-plus",
        url: "test"
    }];
}
