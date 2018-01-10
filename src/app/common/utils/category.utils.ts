import {CategoryModel} from "../models/category.model";
import {ENVIRONMENT} from "../../../config";
import {MoneyEventModel} from "../models/money-event.model";

export class CategoryUtils {
    public static getCategoryCost(category: CategoryModel, moneyEvents: MoneyEventModel[]): number {
        const categoryEvents: MoneyEventModel[] = moneyEvents.filter((event: MoneyEventModel) => {
            return event.category === category.id && event.type === ENVIRONMENT.typeEntries.outcome;
        });

        return categoryEvents.reduce((total: number, event: MoneyEventModel) => {
            return total + event.amount;
        }, 0);
    }
}
