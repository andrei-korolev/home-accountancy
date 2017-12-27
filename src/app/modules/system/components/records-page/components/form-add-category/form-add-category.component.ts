import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

import {CategoriesService} from "../../../../../../common/services/categories.service";
import {CategoryModel} from "../../../../../../common/models/category.model";
import {forbiddenNameValidator} from "./forbidden-name.validator";

@Component({
    selector: "ak-form-add-category",
    templateUrl: "./form-add-category.component.html"
})
export class FormAddCategoryComponent implements OnInit, OnDestroy {
    public formAdd: FormGroup;
    public loading: boolean;
    public minValueLimit: number = 1;

    private subscriptionAddCategory: Subscription;
    private subscriptionGetCategoryByName: Subscription;

    @Output()
    public onCategoryAdd: EventEmitter<CategoryModel> = new EventEmitter();

    constructor(
        private categoriesService: CategoriesService,
        private fb: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.formAdd = this.fb.group({
            name: ["", [
                Validators.required
            ], forbiddenNameValidator.bind(this)],
            limit: [this.minValueLimit, [
                Validators.required,
                Validators.min(this.minValueLimit)
            ]]
        });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionAddCategory) {
            this.subscriptionAddCategory.unsubscribe();
        }

        if (this.subscriptionGetCategoryByName) {
            this.subscriptionGetCategoryByName.unsubscribe();
        }
    }

    public onSubmit(): void {
        const {
            name,
            limit
        } = this.formAdd.value;

        const category: CategoryModel = new CategoryModel(name, limit);

        this.loading = true;

        this.subscriptionAddCategory = this.categoriesService.addCategory(category)
            .subscribe((newCategory: CategoryModel) => {
                this.formAdd.reset();

                this.formAdd.patchValue({
                    limit: this.minValueLimit
                });

                this.onCategoryAdd.emit(newCategory);

                this.loading = false;
            });
    }
}
