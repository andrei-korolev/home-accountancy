import "rxjs/add/observable/combineLatest";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import {BillModel} from "../../../../common/models/bill.model";
import {BillService} from "../../../../common/services/bill.service";
import {CurrencyModel} from "../../../../common/models/currency.model";

@Component({
    selector: "ak-bill-page",
    templateUrl: "./bill-page.component.html"
})
export class BillPageComponent implements OnInit, OnDestroy {
    public bill: BillModel;
    public currency: CurrencyModel;
    public subscriptionBillService: Subscription;

    constructor(private billService: BillService) {}

    public ngOnInit(): void {
        this.subscriptionBillService = Observable.combineLatest(
            this.billService.getBill(),
            this.billService.getCurrency()
        ).subscribe((data: [BillModel, CurrencyModel]) => {
            this.bill = data[0];
            this.currency = data[1];
        });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionBillService) {
            this.subscriptionBillService.unsubscribe();
        }
    }
}
