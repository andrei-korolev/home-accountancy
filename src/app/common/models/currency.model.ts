import {CurrencyType} from "../types/currency.type";

export class CurrencyModel {
    constructor(
        public base: CurrencyType,
        public date: string,
        public rates: {
            RUB: CurrencyType
        }
    ) {}
}
