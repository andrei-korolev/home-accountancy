import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import {RegexpUtils} from "../../../../common/utils/regexp.utils";
import {UsersService} from "../../../../common/services/users.service";
import {User} from "../../../../common/models/user.model";

@Component({
    selector: "ak-registration",
    templateUrl: "./registration.component.html"
})
export class RegistrationComponent implements OnInit, OnDestroy {
    public formRegistration: FormGroup;
    public loading: boolean;

    private subscriptionUsersService: Subscription;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private usersService: UsersService
    ) {}

    public ngOnInit(): void {
        this.formRegistration = this.fb.group({
            email: ["", [
                Validators.required,
                Validators.pattern(RegexpUtils.EMAIL)
            ], this.forbiddenEmail.bind(this)],
            password: ["", [
                Validators.required,
                Validators.minLength(6)
            ]],
            name: ["", [
                Validators.required
            ]]
        });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionUsersService) {
            this.subscriptionUsersService.unsubscribe();
        }
    }

    public onSubmit(): void {
        const {
            email,
            password,
            name
        } = this.formRegistration.value;

        const user: User = new User(email, password, name);

        this.loading = true;

        this.subscriptionUsersService = this.usersService.createNewUser(user)
            .subscribe(() => {
                this.loading = false;

                this.router.navigate(["/login"], {
                    queryParams: {
                        nowCanLogin: true
                    }
                });
            }, (error: Response) => {
                alert(error);
            });
    }

    //TODO: add debounce
    public forbiddenEmail(control: AbstractControl): Promise<ValidationErrors> {
        return new Promise((resolve, reject) => {

            this.usersService.getUserByEmail(control.value)
                .subscribe((user: User) => {
                    if (user) {
                        resolve({
                            forbiddenEmail: true
                        });
                    } else {
                        resolve(null);
                    }
                });
        });
    }
}
