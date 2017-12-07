import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {AuthService} from "../../../../../../common/services/auth.service";
import {DropdownModel} from "../../../../../../components/dropdown/dropdown.model";
import {User} from "../../../../../../common/models/user.model";

@Component({
    selector: "ak-main-header",
    templateUrl: "./main-header.component.html"
})
export class MainHeaderComponent implements OnInit {
    public date: Date = new Date();
    public isOpenMenu: boolean = false;
    public user: User;

    public menu: DropdownModel[] = [{
        label: "Сделать запись",
        icon: "circle-with-plus",
        url: "./records"
    }, {
        label: "Выйти",
        icon: "exit"
    }];

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.user = JSON.parse(window.localStorage.getItem("user"));
    }

    public onToggleMenu(): void {
        this.isOpenMenu = !this.isOpenMenu;
    }

    public onLogout(): void {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }
}
