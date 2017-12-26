import {AbstractControl, ValidationErrors} from "@angular/forms";

import {User} from "../../../../common/models/user.model";

//TODO: add debounce
export function forbiddenEmailValidator(control: AbstractControl): Promise<ValidationErrors> {
    return new Promise((resolve: (value: any) => void, reject: () => void) => {
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
