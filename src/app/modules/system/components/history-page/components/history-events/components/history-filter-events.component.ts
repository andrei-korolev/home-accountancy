import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "ak-history-filter-events",
    templateUrl: "./history-filter-events.component.html"
})
export class HistoryFilterEventsComponent implements OnInit {
    @Input()
    public listFieldsEvent: string[];

    public ngOnInit(): void {
        this.listFieldsEvent = this.listFieldsEvent.slice(1, 5);
    }
}
