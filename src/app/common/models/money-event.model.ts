export class MoneyEventModel {
    constructor(
        public amount: number,
        public category: number,
        public date: string,
        public description: string,
        public type: string,
        public id?: string
    ) {}
}
