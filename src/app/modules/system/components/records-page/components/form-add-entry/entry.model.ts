import {EntryType} from "./entry.type";

export class EntryModel {
    constructor(
        public label: string,
        public type: EntryType,
    ) {}
}
