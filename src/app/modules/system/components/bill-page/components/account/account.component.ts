import {Component} from "@angular/core";

import {AccountModel} from "./account.model";

@Component({
    selector: "ak-account",
    templateUrl: "./account.component.html"
})
export class AccountComponent {
    public currencies: AccountModel[] = [{
        icon: "ruble",
        value: 80.560
    }, {
        icon: "euro",
        value: 845
    }, {
        icon: "dollar",
        value: 1113156
    }];
}
