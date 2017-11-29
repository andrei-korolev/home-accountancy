export class User {
    constructor(
        public id: number = undefined,
        public email: string,
        public password: string,
        public name: string,
    ) {}
}
