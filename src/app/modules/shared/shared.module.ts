import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {CssloadComponent} from "../../components/cssload/cssload.component";
import {LogoComponent} from "../../components/logo/logo.component";
import {MessageComponent} from "../../components/message/message.component";
import {ProgressBarComponent} from "../../components/progress-bar/progress-bar.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CssloadComponent,
        LogoComponent,
        MessageComponent,
        ProgressBarComponent
    ],
    exports: [
        CommonModule,
        CssloadComponent,
        LogoComponent,
        MessageComponent,
        ProgressBarComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule {}
