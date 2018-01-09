import {Component, Input} from "@angular/core";

import {BillModel} from "../../../../../../common/models/bill.model";
import {CategoryModel} from "../../../../../../common/models/category.model";

@Component({
    selector: "ak-expenses",
    templateUrl: "./expenses.component.html"
})
export class ExpensesComponent {
    @Input()
    public bill: BillModel;

    @Input()
    public categories: CategoryModel[];
}
