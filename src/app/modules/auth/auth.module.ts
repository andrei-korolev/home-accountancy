import {NgModule} from "@angular/core";

import {AuthComponent} from "./components/auth/auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./components/login/login.component";
import {LogoComponent} from "../../components/logo/logo.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        LogoComponent,
        RegistrationComponent
    ]
})
export class AuthModule {}
