import {AbstractControl, ValidationErrors} from "@angular/forms";

import {CategoryModel} from "../../../../../../common/models/category.model";
import {PromiseRejectModel} from "../../../../../../common/models/promise/promise-reject.model";
import {PromiseResolveModel} from "../../../../../../common/models/promise/promise-resolve.model";

//TODO: add debounce
export function forbiddenNameValidator(control: AbstractControl): Promise<ValidationErrors> {
    return new Promise((resolve: PromiseResolveModel, reject: PromiseRejectModel) => {
        this.subscriptionGetCategoryByName = this.categoriesService.getCategoryByName(control.value)
            .subscribe((category: CategoryModel[]) => {
                if (category.length) {
                    resolve({
                        forbiddenName: true
                    });
                } else {
                    resolve(null);
                }
            }, (error: any) => {
                alert(error);
            });
    });
}
