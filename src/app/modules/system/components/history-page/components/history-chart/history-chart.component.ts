import {Component, Input} from "@angular/core";

import {ChartConfigModel} from "./chart-config.model";
import {ChartDataModel} from "./chart-data.model";

@Component({
    selector: "ak-history-chart",
    templateUrl: "./history-chart.component.html"
})
export class HistoryChartComponent {
    public config: ChartConfigModel = {
        doughnut: true,
        labels: true,
        legend: false,
        scheme: "air",
        view: [545, 355]
    };

    @Input()
    public data: ChartDataModel[];
}
