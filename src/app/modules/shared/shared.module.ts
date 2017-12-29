import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {CssloadComponent} from "../../components/cssload/cssload.component";
import {DropdownComponent} from "../../components/dropdown/dropdown.component";
import {LogoComponent} from "../../components/logo/logo.component";
import {MessageComponent} from "../../components/message/message.component";
import {ModalCarcassComponent} from "../../components/modal/components/modal-carcass/modal-carcass.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {ModalNotificationComponent} from "../../components/modal/components/modal-notification/modal-notification.component";
import {ModalService} from "../../components/modal/modal.service";
import {ProgressBarComponent} from "../../components/progress-bar/progress-bar.component";

const entryComponents: any[] = [
    ModalNotificationComponent
];

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
        ModalCarcassComponent,
        ModalComponent,
        ProgressBarComponent,

        entryComponents
    ],
    providers: [
        ModalService
    ],
    exports: [
        CommonModule,
        CssloadComponent,
        DropdownComponent,
        LogoComponent,
        MessageComponent,
        ModalCarcassComponent,
        ModalComponent,
        ProgressBarComponent,
        ReactiveFormsModule,

        entryComponents
    ],
    entryComponents: [
        entryComponents
    ]
})
export class SharedModule {}
