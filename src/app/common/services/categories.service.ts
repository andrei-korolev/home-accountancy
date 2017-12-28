import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {BaseApi} from "../core/base-api";
import {CategoryModel} from "../models/category.model";
import {ENVIRONMENT} from "../../../config";

@Injectable()
export class CategoriesService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }

    public addCategory(category: CategoryModel): Observable<CategoryModel> {
        return this.post(ENVIRONMENT.services.categories.path, category);
    }

    public getCategories(): Observable<CategoryModel[]> {
        return this.get(ENVIRONMENT.services.categories.path);
    }

    public getCategoryByName(name: string): Observable<CategoryModel> {
        let parameter: string = "name";

        return this.get(`${ENVIRONMENT.services.categories.path}?${parameter}=${name}`);
    }

    public updateCategory(category: CategoryModel): Observable<CategoryModel> {
        return this.put(`${ENVIRONMENT.services.categories.path}/${category.id}`, category);
    }
}
