import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import {ENVIRONMENT} from "../../../config";
import {User} from "../models/user.model";

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    public getUserByEmail(email: string): Observable<User> {
        return this.http
            .get(`${ENVIRONMENT.serverBase}/users?email=${email}`)
            .map((user: User) => user[0] ? user[0] : undefined)
            .catch((error: Response) => {
                return Observable.throw(error.statusText);
            });
    }

    public createNewUser(user: User): Observable<User> {
        return this.http
            .post(`${ENVIRONMENT.serverBase}/users`, user)
            .catch((error: Response) => {
                return Observable.throw(error.statusText);
            });
    }
}
