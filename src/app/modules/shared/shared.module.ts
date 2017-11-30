import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {CssloadComponent} from "../../components/cssload/cssload.component";
import {MessageComponent} from "../../components/message/message.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CssloadComponent,
        MessageComponent
    ],
    exports: [
        CommonModule,
        CssloadComponent,
        MessageComponent,
        ReactiveFormsModule,
    ]
})
export class SharedModule {}
