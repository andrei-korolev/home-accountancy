import {AbstractControl, ValidationErrors} from "@angular/forms";

import {CategoryModel} from "../models/category.model";
import {PromiseRejectModel} from "../models/promise/promise-reject.model";
import {PromiseResolveModel} from "../models/promise/promise-resolve.model";

//TODO: add debounce
export function forbiddenNameCategoryValidator(control: AbstractControl): Promise<ValidationErrors> {
    return new Promise((resolve: PromiseResolveModel, reject: PromiseRejectModel) => {
        this.subscriptionGetCategoryByName = this.categoriesService.getCategoryByName(control.value.toLowerCase())
            .subscribe((category: CategoryModel[]) => {
                if (category.length) {
                    if (this.currentCategory) {
                        if (this.currentCategory.id !== category[0].id) {
                            resolve({
                                forbiddenName: true
                            });
                        } else {
                            resolve(null);
                        }
                    } else {
                        resolve({
                            forbiddenName: true
                        });
                    }
                } else {
                    resolve(null);
                }
            }, (error: any) => {
                alert(error);
            });
    });
}
