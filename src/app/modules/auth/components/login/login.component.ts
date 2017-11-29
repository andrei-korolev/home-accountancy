import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../../../common/services/auth.service";
import {MessageModel} from "../../../../components/message/message.model";
import {UsersService} from "../../../../common/services/users.service";
import {User} from "../../../../common/models/user.model";

@Component({
    selector: "ak-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    public formLogin: FormGroup;
    public loading: boolean;
    public message: MessageModel;

    private patternEmail: string = "[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}";

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private usersService: UsersService
    ) {}

    public ngOnInit(): void {
        this.formLogin = this.fb.group({
            email: ["", [
                Validators.required,
                Validators.pattern(this.patternEmail)
            ]],
            password: ["", [
                Validators.required,
                Validators.minLength(6)
            ]]
        });
    }

    public onSubmit(): void {
        const formData = this.formLogin.value;

        this.loading = true;


       this.usersService.getUserByEmail(formData.email)
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
               // this.router.navigate([]);
           }, (error: Response) => {
               alert(error);
           });
    }

    private showMessage(text: string, type: string = "danger"): void {
        this.message = new MessageModel(type, text);
    }
}
