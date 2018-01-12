import {Component, Input, OnInit} from "@angular/core";

import {CategoryModel} from "../../../../../../common/models/category.model";
import {ENVIRONMENT} from "../../../../../../../config";
import {MoneyEventModel} from "../../../../../../common/models/money-event.model";
import {TypeEntriesModel} from "../../../../../../common/models/type-entries.model";

@Component({
    selector: "ak-history-events",
    templateUrl: "./history-events.component.html"
})
export class HistoryEventsComponent implements OnInit {
    public listFieldsEvent: string[] = [
        "#",
        "Сумма",
        "Дата",
        "Категория",
        "Тип",
        "Действие"
    ];
    public type: TypeEntriesModel = ENVIRONMENT.typeEntries;

    @Input()
    public categories: CategoryModel[];

    @Input()
    public moneyEvents: MoneyEventModel[];

    public ngOnInit(): void {
        let categoryNames: any = {};

        this.moneyEvents.forEach((event: MoneyEventModel) => {
            if (categoryNames[event.category]) {
                event.categoryName = categoryNames[event.category];

                return;
            }

            event.categoryName = this.categories.find((category: CategoryModel) => {
                if (category.id === event.category) {
                    categoryNames[category.id] = category.name;

                    return true;
                }

                return false;
            }).name;
        });
    }
}
