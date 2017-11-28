import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthComponent} from "./components/auth/auth.component";
import {ENVIRONMENT} from "../../../config";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes =
    [{
        path: "",
        component: AuthComponent,
        children: [{
            path: ENVIRONMENT.routes.login.path,
            component: LoginComponent
        }, {
            path: ENVIRONMENT.routes.registration.path,
            component: RegistrationComponent
        }]
    }];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}
