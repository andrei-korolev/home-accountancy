import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import {BillModel} from "../../../../../../common/models/bill.model";
import {BillService} from "../../../../../../common/services/bill.service";
import {CategoryModel} from "../../../../../../common/models/category.model";
import {EntryModel} from "./entry.model";
import {ENVIRONMENT} from "../../../../../../../config";
import {ModalNotificationComponent} from "../../../../../../components/modal/components/modal-notification/modal-notification.component";
import {ModalService} from "../../../../../../components/modal/modal.service";
import {MoneyEventModel} from "../../../../../../common/models/money-event.model";
import {MoneyEventService} from "../../../../../../common/services/money-event.service";

@Component({
    selector: "ak-form-add-entry",
    templateUrl: "./form-add-entry.component.html"
})
export class FormAddEntryComponent implements OnInit, OnDestroy {
    public formAdd: FormGroup;
    public loading: boolean;
    public minValueLimit: number = 1;
    public typesEntries: EntryModel[] = [{
        label: "Доход",
        type: ENVIRONMENT.typeEntries.income
    }, {
        label: "Расход",
        type: ENVIRONMENT.typeEntries.outcome
    }];

    @Input()
    public categories: CategoryModel[] = [];

    private subscriptionCombineLatest: Subscription;
    private subscriptionGetBill: Subscription;

    constructor(
        private billService: BillService,
        private fb: FormBuilder,
        private modalService: ModalService,
        private moneyEventService: MoneyEventService
    ) {}

    public ngOnInit(): void {
        this.formAdd = this.fb.group({
            category: ["",
                Validators.required
            ],
            type: [ENVIRONMENT.typeEntries.outcome,
                Validators.required
            ],
            amount: [this.minValueLimit, [
                Validators.required,
                Validators.min(this.minValueLimit)
            ]],
            description: [""]
        });
    }

    public ngOnDestroy(): void {
        if (this.subscriptionGetBill) {
            this.subscriptionGetBill.unsubscribe();
        }

        if (this.subscriptionCombineLatest) {
            this.subscriptionCombineLatest.unsubscribe();
        }
    }

    public onSubmit(): void {
        const {
            amount,
            category,
            description,
            type
        } = this.formAdd.value;

        const date: Date = new Date();
        const dateString: string = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        const event: MoneyEventModel = new MoneyEventModel(amount, +category, dateString, description, type);

        this.loading = true;

        this.subscriptionGetBill = this.billService.getBill()
            .subscribe((bill: BillModel) => {
                let value: number;

                if (type === ENVIRONMENT.typeEntries.outcome) {
                    if (amount > bill.value) {
                        let message: string = `На счету недостаточно средств. Вам нехватает - ${amount - bill.value}`;

                        this.modalService.open({
                            component: ModalNotificationComponent,
                            context: {
                                message: message
                            }
                        });

                        this.loading = false;

                        return;
                    } else {
                        value = bill.value - amount;
                    }
                } else {
                    value = bill.value + amount;
                }

                this.subscriptionCombineLatest = Observable.combineLatest(
                    this.billService.updateBill(new BillModel(value, bill.currency)),
                    this.moneyEventService.addEvent(event)
                ).subscribe(() => {
                    let message: string = "Событие успешно добавленно";

                    this.formAdd.setValue({
                        amount: this.minValueLimit,
                        category: null,
                        description: "",
                        type: ENVIRONMENT.typeEntries.outcome
                    });

                    this.modalService.open({
                        component: ModalNotificationComponent,
                        context: {
                            message: message
                        }
                    });

                    this.loading = false;
                });
            });
    }
}
