import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {BaseApi} from "../core/base-api";
import {BillModel} from "../models/bill.model";
import {CurrencyModel} from "../models/currency.model";
import {CurrencyType} from "../types/currency.type";
import {ENVIRONMENT} from "../../../config";

@Injectable()
export class BillService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }

    public getBill(): Observable<BillModel> {
        return this.get(ENVIRONMENT.services.bill.path);
    }

    public getCurrency(base: CurrencyType = "RUB"): Observable<CurrencyModel> {
        let parameter: string = "base";

        return this.http
            .get(`${ENVIRONMENT.outsourcingServices.fixer.path}?${parameter}=${base}`)
            .catch((error: HttpErrorResponse) => {
                return Observable.throw(error.statusText);
            });
    }

    public updateBill(bill: BillModel): Observable<BillModel> {
        return this.put(ENVIRONMENT.services.bill.path, bill);
    }
}
