import {NgModule} from "@angular/core";
import {NgxChartsModule} from "@swimlane/ngx-charts";

import {AccountComponent} from "./components/bill-page/components/account/account.component";
import {BillPageComponent} from "./components/bill-page/bill-page.component";
import {BillService} from "../../common/services/bill.service";
import {CategoriesService} from "../../common/services/categories.service";
import {CommonPanelComponent} from "./components/common-panel/common-panel.component";
import {CurrencyRateComponent} from "./components/bill-page/components/currency-rate/currency-rate.component";
import {ExpensesComponent} from "./components/planning-page/components/expenses/expenses.component";
import {FormAddCategoryComponent} from "./components/records-page/components/form-add-category/form-add-category.component";
import {FormAddEntryComponent} from "./components/records-page/components/form-add-entry/form-add-entry.component";
import {FormEditCategoryComponent} from "./components/records-page/components/form-edit-category/form-edit-category.component";
import {HistoryChartComponent} from "./components/history-page/components/history-chart/history-chart.component";
import {HistoryEventsComponent} from "./components/history-page/components/history-events/history-events.component";
import {HistoryFilterEventsComponent} from "./components/history-page/components/history-events/components/history-filter-events.component";
import {HistoryPageComponent} from "./components/history-page/history-page.component";
import {LayoutPageComponent} from "./components/layout-page/layout-page.component";
import {MainHeaderComponent} from "./components/system/components/main-header/main-header.component";
import {MoneyEventService} from "../../common/services/money-event.service";
import {PlanningPageComponent} from "./components/planning-page/planning-page.component";
import {RecordsPageComponent} from "./components/records-page/records-page.component";
import {SharedModule} from "../shared/shared.module";
import {SidebarComponent} from "./components/system/components/sidebar/sidebar.component";
import {SystemComponent} from "./components/system/system.component";
import {SystemRoutingModule} from "./system-routing.module";

@NgModule({
    imports: [
        NgxChartsModule,
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
        FormEditCategoryComponent,
        HistoryChartComponent,
        HistoryEventsComponent,
        HistoryFilterEventsComponent,
        HistoryPageComponent,
        LayoutPageComponent,
        MainHeaderComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SidebarComponent,
        SystemComponent
    ],
    providers: [
        BillService,
        CategoriesService,
        MoneyEventService
    ],
    exports: [
        SharedModule
    ]
})
export class SystemModule {}
