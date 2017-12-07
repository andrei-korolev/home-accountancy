import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {CssloadComponent} from "../../components/cssload/cssload.component";
import {DropdownComponent} from "../../components/dropdown/dropdown.component";
import {LogoComponent} from "../../components/logo/logo.component";
import {MessageComponent} from "../../components/message/message.component";
import {ProgressBarComponent} from "../../components/progress-bar/progress-bar.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        CssloadComponent,
        DropdownComponent,
        LogoComponent,
        MessageComponent,
        ProgressBarComponent
    ],
    exports: [
        CommonModule,
        CssloadComponent,
        DropdownComponent,
        LogoComponent,
        MessageComponent,
        ProgressBarComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule {}
