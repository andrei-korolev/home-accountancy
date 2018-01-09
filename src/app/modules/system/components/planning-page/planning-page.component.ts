import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import {BillModel} from "../../../../common/models/bill.model";
import {BillService} from "../../../../common/services/bill.service";
import {CategoriesService} from "../../../../common/services/categories.service";
import {CategoryModel} from "../../../../common/models/category.model";
import {ENVIRONMENT} from "../../../../../config";
import {MoneyEventModel} from "../../../../common/models/money-event.model";
import {MoneyEventService} from "../../../../common/services/money-event.service";

@Component({
    selector: "ak-planning-page",
    templateUrl: "./planning-page.component.html"
})
export class PlanningPageComponent implements OnInit, OnDestroy {
    public bill: BillModel;
    public categories: CategoryModel[];
    public loading: boolean = true;
    public moneyEvents: MoneyEventModel[];

    private subscriptionCombineLatest: Subscription;

    constructor(
        private billService: BillService,
        private categoriesService: CategoriesService,
        private moneyEventService: MoneyEventService
    ) {}

    public ngOnInit(): void {
        this.subscriptionCombineLatest = Observable.combineLatest(
            this.billService.getBill(),
            this.categoriesService.getCategories(),
            this.moneyEventService.getEvents()
        ).subscribe((data: [BillModel, CategoryModel[], MoneyEventModel[]]) => {
            this.bill = data[0];
            this.categories = data[1];
            this.moneyEvents = data[2];

            this.categories.forEach((item: CategoryModel) => {
                item.cost = this.getCategoryCost(item);
                item.costPercent = this.getPercent(item);
                item.remainder = item.limit - item.cost;
            });

            this.loading = false;
        });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionCombineLatest) {
            this.subscriptionCombineLatest.unsubscribe();
        }
    }

    public getCategoryCost(category: CategoryModel): number {
        const categoryEvents: MoneyEventModel[] = this.moneyEvents.filter((event: MoneyEventModel) => {
            return event.category === category.id && event.type === ENVIRONMENT.typeEntries.outcome;
        });

        return categoryEvents.reduce((total: number, event: MoneyEventModel) => {
            return total + event.amount;
        }, 0);
    }

    public getPercent(category: CategoryModel): number {
        const percent: number = (100 * category.cost) / category.limit;

        return (percent > 100) ? 100 : percent;
    }
}
