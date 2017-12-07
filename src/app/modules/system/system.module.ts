import {NgModule} from "@angular/core";

import {AccountComponent} from "./components/bill-page/components/account/account.component";
import {BillPageComponent} from "./components/bill-page/bill-page.component";
import {BillService} from "../../common/services/bill.service";
import {CommonPanelComponent} from "./components/common-panel/common-panel.component";
import {CurrencyRateComponent} from "./components/bill-page/components/currency-rate/currency-rate.component";
import {ExpensesComponent} from "./components/planning-page/components/expenses/expenses.component";
import {FormAddCategoryComponent} from "./components/records-page/components/form-add-category/form-add-category.component";
import {FormAddEntryComponent} from "./components/records-page/components/form-add-entry/form-add-entry.component";
import {HistoryChartComponent} from "./components/history-page/components/history-chart/history-chart.component";
import {HistoryPageComponent} from "./components/history-page/history-page.component";
import {LayoutPageComponent} from "./components/layout-page/layout-page.component";
import {ListActivitiesComponent} from "./components/history-page/components/list-activities/list-activities.component";
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
        FormAddCategoryComponent,
        FormAddEntryComponent,
        HistoryChartComponent,
        HistoryPageComponent,
        LayoutPageComponent,
        ListActivitiesComponent,
        MainHeaderComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SidebarComponent,
        SystemComponent
    ],
    providers: [
        BillService
    ]
})
export class SystemModule {}
