import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {BillPageComponent} from "./components/bill-page/bill-page.component";
import {ENVIRONMENT} from "../../../config";
import {HistoryPageComponent} from "./components/history-page/history-page.component";
import {PlanningPageComponent} from "./components/planning-page/planning-page.component";
import {RecordsPageComponent} from "./components/records-page/records-page.component";
import {SystemComponent} from "./components/system/system.component";

const routes: Routes =
    [{
        path: ENVIRONMENT.routes.system.path,
        component: SystemComponent,
        children: [{
            path: ENVIRONMENT.routes.bill.path,
            component: BillPageComponent
        }, {
            path: ENVIRONMENT.routes.history.path,
            component: HistoryPageComponent
        }, {
            path: ENVIRONMENT.routes.planning.path,
            component: PlanningPageComponent
        }, {
            path: ENVIRONMENT.routes.records.path,
            component: RecordsPageComponent
        },]
    }];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SystemRoutingModule {}
