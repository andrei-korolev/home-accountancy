import {ActivatedRoute, Params, Router} from "@angular/router";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs/Subscription";

import {AuthService} from "../../../../common/services/auth.service";
import {MessageModel} from "../../../../components/message/message.model";
import {MessageType} from "../../../../components/message/message.type";
import {RegexpUtils} from "../../../../common/utils/regexp.utils";
import {UsersService} from "../../../../common/services/users.service";
import {User} from "../../../../common/models/user.model";

@Component({
    selector: "ak-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit, OnDestroy {
    public formLogin: FormGroup;
    public loading: boolean;
    public message: MessageModel;

    private subscriptionUsersService: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router,
        private usersService: UsersService
    ) {}

    public ngOnInit(): void {
        this.activatedRoute.queryParams
            .subscribe((params: Params) => {
                if (params["nowCanLogin"]) {
                    this.showMessage("Теперь вы можете зайти в систему", "success");
                }
            });

        this.formLogin = this.fb.group({
            email: ["", [
                Validators.required,
                Validators.pattern(RegexpUtils.EMAIL)
            ]],
            password: ["", [
                Validators.required,
                Validators.minLength(6)
            ]]
        });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionUsersService) {
            this.subscriptionUsersService.unsubscribe();
        }
    }

    public onSubmit(): void {
        const formData = this.formLogin.value;

        this.loading = true;

       this.subscriptionUsersService = this.usersService.getUserByEmail(formData.email)
           .subscribe((user: User) => {
               this.loading = false;

               if (!user) {
                   this.showMessage("Такого пользователя не существует");
                   return;
               }

               if (user.password !== formData.password) {
                   this.showMessage("Пароль не верный");
                   return;
               }

               this.message = null;

               window.localStorage.setItem("user", JSON.stringify(user));

               this.authService.login();
               this.router.navigate(["/system", "bill"]);
           }, (error: HttpErrorResponse) => {
               alert(error);
           });
    }

    private showMessage(text: string, type: MessageType = "danger"): void {
        this.message = new MessageModel(type, text);
    }
}
