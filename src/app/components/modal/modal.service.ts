import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {ModalModel} from "./modal.model";

@Injectable()
export class ModalService {
    private modalSequence$$: Subject<ModalModel | null> = new Subject();

    public open(item: ModalModel): void {
        this.modalSequence$$.next(item);
    }

    public close(): void {
        this.modalSequence$$.next(null);
    }

    public get modalSequence$(): Observable<any> {
        return this.modalSequence$$.asObservable();
    }
}
