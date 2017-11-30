import {MessageType} from "./message.type";

export class MessageModel {
    constructor(
        public type: MessageType,
        public text: string
    ) {}
}
