import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {ENVIRONMENT} from "../../../config";

@Injectable()
export class BaseApi {
    private serverBase: string = ENVIRONMENT.serverBase;

    constructor(public http: HttpClient) {}

    public get(url: string): Observable<any> {
        return this.http
            .get(this.getUrl(url))
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    public post(url: string, data: any = {}): Observable<any> {
        return this.http
            .post(this.getUrl(url), data)
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    public put(url: string, data: any = {}): Observable<any> {
        return this.http
            .put(this.getUrl(url), data)
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    private getUrl(url: string = ""): string {
        return `${this.serverBase}/${url}`;
    }
}
