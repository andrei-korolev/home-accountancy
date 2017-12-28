import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {CategoriesService} from "../../../../common/services/categories.service";
import {CategoryModel} from "../../../../common/models/category.model";

@Component({
    selector: "ak-records-page",
    templateUrl: "./records-page.component.html"
})
export class RecordsPageComponent implements OnInit, OnDestroy {
    public categories: CategoryModel[] = [];

    private subscriptionGetCategories: Subscription;

    constructor(private categoriesService: CategoriesService) {}

    public ngOnInit(): void {
        this.subscriptionGetCategories = this.categoriesService.getCategories()
            .subscribe((categories: CategoryModel[]) => {
                this.categories = categories;
            });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionGetCategories) {
            this.subscriptionGetCategories.unsubscribe();
        }
    }

    public updateListCategories(category: CategoryModel): void {
        this.categories.push(category);
    }

    public updateViewCategory(category: CategoryModel): void {
        const idx: number = this.categories
            .findIndex((item: CategoryModel) => item.id === category.id);

        this.categories[idx] = category;
    }
}
