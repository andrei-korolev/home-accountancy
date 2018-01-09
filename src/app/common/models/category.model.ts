export class CategoryModel {
    constructor(
        public name: string,
        public limit: number,
        public id?: number,
        public cost?: number,
        public costPercent?: number,
        public remainder?: number
    ) {}
}
