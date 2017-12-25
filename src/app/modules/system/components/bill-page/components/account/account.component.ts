import {Component, Input, OnInit} from "@angular/core";

import {AccountModel} from "./account.model";
import {BillModel} from "../../../../../../common/models/bill.model";
import {CurrencyModel} from "../../../../../../common/models/currency.model";

@Component({
    selector: "ak-account",
    templateUrl: "./account.component.html"
})
export class AccountComponent implements OnInit {
    @Input()
    public bill: BillModel;

    @Input()
    public currency: CurrencyModel;

    public currencies: AccountModel[];

    public ngOnInit(): void {
        const { rates } = this.currency;

        let ruble: number = this.bill.value;
        let dollar: number = rates["USD"] * ruble;
        let euro: number = rates["EUR"] * ruble;

        this.currencies =  [{
            icon: "ruble",
            value: ruble
        }, {
            icon: "euro",
            value: euro
        }, {
            icon: "dollar",
            value: dollar
        }];
    }
}
