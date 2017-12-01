import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
import {CssloadComponent} from "../../components/cssload/cssload.component";
import {LogoComponent} from "../../components/logo/logo.component";
import {MessageComponent} from "../../components/message/message.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CssloadComponent,
        LogoComponent,
        MessageComponent
    ],
    exports: [
        CommonModule,
        CssloadComponent,
        LogoComponent,
        MessageComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule {}
