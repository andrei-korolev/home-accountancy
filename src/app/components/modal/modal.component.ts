import {
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewContainerRef
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {ModalModel} from "./modal.model";
import {ModalService} from "./modal.service";

@Component({
    selector: "ak-modal",
    templateUrl: "./modal.component.html"
})
export class ModalComponent implements OnInit, OnDestroy {
    public isOpen: boolean = false;

    private modalContext: ComponentRef<any>;
    private subscriptionModalService: Subscription;

    @ViewChild("modalContent", {read: ViewContainerRef})
    private modal: ViewContainerRef;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private modalService: ModalService
    ) {}

    public ngOnInit(): void {
        this.onKeyUp = this.onKeyUp.bind(this);

        this.subscriptionModalService = this.modalService.modalSequence$
            .subscribe((item: ModalModel | null) => {
                if (!item) {
                    this.close();
                    return;
                }

                this.isOpen = true;

                const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(item.component);

                this.modalContext = this.modal.createComponent(componentFactory);

                Object.keys(item.context)
                    .forEach((key: any) => {
                        this.modalContext.instance[key] = item.context[key];
                    });

                if (item.escClose !== false) {
                    document.addEventListener("keyup", this.onKeyUp);
                }
            });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionModalService) {
            this.subscriptionModalService.unsubscribe();
        }
    }

    public onKeyUp(event: KeyboardEvent): void {
        let code: number = event.keyCode;

        if (code !== 27 || !this.modalContext) {
            return;
        }

        this.close();
    }

    public close(code: number = 27): void {
        this.modalContext.destroy();
        this.isOpen = false;

        document.removeEventListener("keyup", this.onKeyUp);
    }
}
