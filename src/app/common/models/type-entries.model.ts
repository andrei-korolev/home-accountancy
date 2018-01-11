import {EntryType} from "../../modules/system/components/records-page/components/form-add-entry/entry.type";

export class TypeEntriesModel {
    constructor(
        public income: EntryType,
        public outcome: EntryType
    ) {}
}
