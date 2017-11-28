import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ENVIRONMENT} from "../config";

const routes: Routes = [{
    path: "",
    redirectTo: ENVIRONMENT.routes.login.path,
    pathMatch: "full"
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
