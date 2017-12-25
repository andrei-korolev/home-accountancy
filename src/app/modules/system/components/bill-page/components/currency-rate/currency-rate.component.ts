import {Component, Input} from "@angular/core";

import {CurrencyModel} from "../../../../../../common/models/currency.model";
import {CurrencyType} from "../../../../../../common/types/currency.type";

@Component({
    selector: "ak-currency-rate",
    templateUrl: "./currency-rate.component.html"
})
export class CurrencyRateComponent {
    @Input()
    public currency: CurrencyModel;

    public currencies: CurrencyType[] = ["USD", "EUR"];
}
