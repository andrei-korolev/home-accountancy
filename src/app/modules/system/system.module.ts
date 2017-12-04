import {NgModule} from "@angular/core";

import {AccountComponent} from "./components/bill-page/components/account/account.component";
import {BillPageComponent} from "./components/bill-page/bill-page.component";
import {CommonPanelComponent} from "./components/common-panel/common-panel.component";
import {CurrencyRateComponent} from "./components/bill-page/components/currency-rate/currency-rate.component";
import {ExpensesComponent} from "./components/planning-page/components/expenses/expenses.component";
import {HistoryPageComponent} from "./components/history-page/history-page.component";
import {LayoutPageComponent} from "./components/layout-page/layout-page.component";
import {MainHeaderComponent} from "./components/system/components/main-header/main-header.component";
import {PlanningPageComponent} from "./components/planning-page/planning-page.component";
import {RecordsPageComponent} from "./components/records-page/records-page.component";
import {SharedModule} from "../shared/shared.module";
import {SidebarComponent} from "./components/system/components/sidebar/sidebar.component";
import {SystemComponent} from "./components/system/system.component";
import {SystemRoutingModule} from "./system-routing.module";

@NgModule({
    imports: [
        SharedModule,
        SystemRoutingModule
    ],
    declarations: [
        AccountComponent,
        BillPageComponent,
        CommonPanelComponent,
        CurrencyRateComponent,
        ExpensesComponent,
        HistoryPageComponent,
        LayoutPageComponent,
        MainHeaderComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SidebarComponent,
        SystemComponent
    ]
})
export class SystemModule {}
