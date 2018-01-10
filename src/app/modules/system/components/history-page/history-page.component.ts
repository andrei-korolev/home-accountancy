import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import {CategoriesService} from "../../../../common/services/categories.service";
import {CategoryModel} from "../../../../common/models/category.model";
import {CategoryUtils} from "../../../../common/utils/category.utils";
import {ChartDataModel} from "./components/history-chart/chart-data.model";
import {MoneyEventModel} from "../../../../common/models/money-event.model";
import {MoneyEventService} from "../../../../common/services/money-event.service";

@Component({
    selector: "ak-history-page",
    templateUrl: "./history-page.component.html"
})
export class HistoryPageComponent implements OnInit, OnDestroy {
    public categories: CategoryModel[];
    public chartData: ChartDataModel[];
    public loading: boolean = true;
    public moneyEvents: MoneyEventModel[];

    private subscriptionCombineLatest: Subscription;

    constructor(
        private categoriesService: CategoriesService,
        private moneyEventService: MoneyEventService
    ) {}

    public ngOnInit(): void {
        this.subscriptionCombineLatest = Observable.combineLatest(
            this.categoriesService.getCategories(),
            this.moneyEventService.getEvents()
        ).subscribe((data: [CategoryModel[], MoneyEventModel[]]) => {
            this.categories = data[0];
            this.moneyEvents = data[1];

            this.calculateChartData();

            this.loading = false;
        });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionCombineLatest) {
            this.subscriptionCombineLatest.unsubscribe();
        }
    }

    public calculateChartData(): void {
        this.chartData = [];

        this.categories.forEach((category: CategoryModel) => {
            this.chartData.push({
                name: category.name,
                value: CategoryUtils.getCategoryCost(category, this.moneyEvents)
            });
        });
    }
}
