import {Component} from "@angular/core";

import {CategoryModel} from "../../../../common/models/category.model";

@Component({
    selector: "ak-records-page",
    templateUrl: "./records-page.component.html"
})
export class RecordsPageComponent {
    public newCategoryAdded(category: CategoryModel): void {

    }
}
