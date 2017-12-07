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
        url: "./bill"
    }, {
        label: "История",
        icon: "clock",
        url: "./history"
    }, {
        label: "Планирование",
        icon: "archive",
        url: "./planning"
    }, {
        label: "Запись",
        icon: "circle-with-plus",
        url: "./records"
    }];
}
