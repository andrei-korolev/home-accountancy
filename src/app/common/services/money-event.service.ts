import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {BaseApi} from "../core/base-api";
import {ENVIRONMENT} from "../../../config";
import {MoneyEventModel} from "../models/money-event.model";

@Injectable()
export class MoneyEventService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }

    public addEvent(event: MoneyEventModel): Observable<MoneyEventModel> {
        return this.post(ENVIRONMENT.services.events.path, event);
    }

    public getEvents(): Observable<MoneyEventModel[]> {
        return this.get(ENVIRONMENT.services.events.path);
    }
}
