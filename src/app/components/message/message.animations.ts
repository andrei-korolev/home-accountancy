import {animate, style, transition, trigger} from "@angular/animations";

export const toggleMessageTrigger = trigger('toggleMessageTrigger', [
    transition(":enter", [
        style({
            opacity: 0
        }),
        animate(1000)
    ])
]);
