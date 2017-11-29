import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {CssloadComponent} from "../../components/cssload/cssload.component";
import {MessageComponent} from "../../components/message/message.component";

@NgModule({
    imports: [
        ReactiveFormsModule,
    ],
    declarations: [
        CssloadComponent,
        MessageComponent
    ],
    exports: [
        CssloadComponent,
        MessageComponent,
        ReactiveFormsModule,
    ]
})
export class SharedModule {}
