export class ChartConfigModel {
    constructor(
        public doughnut: boolean,
        public labels: boolean,
        public legend: boolean,
        public scheme: SchemeType,
        public view: number[]
    ) {}
}

type SchemeType = "air";
