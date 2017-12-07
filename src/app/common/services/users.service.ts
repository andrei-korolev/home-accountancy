import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {BaseApi} from "../core/base-api";
import {ENVIRONMENT} from "../../../config";
import {User} from "../models/user.model";

@Injectable()
export class UsersService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }

    public getUserByEmail(email: string): Observable<User> {
        let parameter: string = "email";

        return this
            .get(`${ENVIRONMENT.routes.users.path}?${parameter}=${email}`)
            .map((user: User) => user[0] ? user[0] : undefined);
    }

    public createNewUser(user: User): Observable<User> {
        return this.post(ENVIRONMENT.routes.users.path, user);
    }
}
