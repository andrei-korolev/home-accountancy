import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

import {CategoriesService} from "../../../../../../common/services/categories.service";
import {CategoryModel} from "../../../../../../common/models/category.model";
import {forbiddenNameCategoryValidator} from "../../../../../../common/validators/forbidden-name-category.validator";

@Component({
    selector: "ak-form-edit-category",
    templateUrl: "./form-edit-category.component.html"
})
export class FormEditCategoryComponent implements OnInit, OnDestroy {
    public currentCategory: CategoryModel;
    public differencesFields: boolean;
    public formEdit: FormGroup;
    public loading: boolean;
    public minValueLimit: number = 1;

    @Input()
    public categories: CategoryModel[] = [];

    @Output()
    public onCategoryEdit: EventEmitter<CategoryModel> = new EventEmitter();

    private subscriptionGetCategoryByName: Subscription;
    private subscriptionValueChangesForm: Subscription;
    private subscriptionValueChangesSelect: Subscription;

    constructor(
        private categoriesService: CategoriesService,
        private fb: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.formEdit = this.fb.group({
            select: [""],
            name: ["", [
                Validators.required
            ], forbiddenNameCategoryValidator.bind(this)],
            limit: [this.minValueLimit, [
                Validators.required,
                Validators.min(this.minValueLimit)
            ]]
        });

        this.subscriptionValueChangesSelect = this.formEdit.controls.select.valueChanges
            .subscribe((id: string) => {
                this.currentCategory = this.categories
                    .find((item: CategoryModel) => {
                        return item.id === +id;
                    });

                const {
                    name,
                    limit
                } = this.currentCategory;

                this.formEdit.controls.name.setValue(name);
                this.formEdit.controls.limit.setValue(limit);
            });

        this.subscriptionValueChangesForm = this.formEdit.valueChanges
            .subscribe((category: CategoryModel) => {
                this.differencesFields = (category.name !== this.currentCategory.name) || (category.limit !== this.currentCategory.limit);
            });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionGetCategoryByName) {
            this.subscriptionGetCategoryByName.unsubscribe();
        }

        if (this.subscriptionValueChangesSelect) {
            this.subscriptionValueChangesSelect.unsubscribe();
        }

        if (this.subscriptionValueChangesForm) {
            this.subscriptionValueChangesForm.unsubscribe();
        }
    }

    public onSubmit(): void {
        const {
            select,
            name,
            limit
        } = this.formEdit.value;

        const newCategory: CategoryModel = new CategoryModel(name, limit, select);

        this.loading = true;

        this.categoriesService.updateCategory(newCategory)
            .subscribe((category: CategoryModel) => {
                this.onCategoryEdit.emit(category);

                this.differencesFields = false;

                this.loading = false;
            });
    }
}
