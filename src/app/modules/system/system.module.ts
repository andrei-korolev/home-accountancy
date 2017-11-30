import {NgModule} from "@angular/core";

import {BillPageComponent} from "./components/bill-page/bill-page.component";
import {HistoryPageComponent} from "./components/history-page/history-page.component";
import {PlanningPageComponent} from "./components/planning-page/planning-page.component";
import {RecordsPageComponent} from "./components/records-page/records-page.component";
import {SharedModule} from "../shared/shared.module";
import {SystemComponent} from "./components/system/system.component";
import {SystemRoutingModule} from "./system-routing.module";

@NgModule({
    imports: [
        SharedModule,
        SystemRoutingModule
    ],
    declarations: [
        BillPageComponent,
        HistoryPageComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SystemComponent
    ]
})
export class SystemModule {}
