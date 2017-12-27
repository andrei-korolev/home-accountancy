import {AbstractControl, ValidationErrors} from "@angular/forms";

import {PromiseRejectModel} from "../../../../common/models/promise/promise-reject.model";
import {PromiseResolveModel} from "../../../../common/models/promise/promise-resolve.model";
import {User} from "../../../../common/models/user.model";

//TODO: add debounce
export function forbiddenEmailValidator(control: AbstractControl): Promise<ValidationErrors> {
    return new Promise((resolve: PromiseResolveModel, reject: PromiseRejectModel) => {
        this.subscriptionGetUserByEmail = this.usersService.getUserByEmail(control.value)
            .subscribe((user: User) => {
                if (user) {
                    resolve({
                        forbiddenEmail: true
                    });
                } else {
                    resolve(null);
                }
            }, (error: any) => {
                alert(error);
            });
    });
}
