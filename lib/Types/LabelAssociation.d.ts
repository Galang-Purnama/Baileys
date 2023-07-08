/** Association type */
export declare enum LabelAssociationType {
    Chat = "label_jid",
    Message = "label_message"
}
<<<<<<< HEAD
export type LabelAssociationTypes = `${LabelAssociationType}`;
=======
export declare type LabelAssociationTypes = `${LabelAssociationType}`;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
/** Association for chat */
export interface ChatLabelAssociation {
    type: LabelAssociationType.Chat;
    chatId: string;
    labelId: string;
}
/** Association for message */
export interface MessageLabelAssociation {
    type: LabelAssociationType.Message;
    chatId: string;
    messageId: string;
    labelId: string;
}
<<<<<<< HEAD
export type LabelAssociation = ChatLabelAssociation | MessageLabelAssociation;
=======
export declare type LabelAssociation = ChatLabelAssociation | MessageLabelAssociation;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
/** Body for add/remove chat label association action */
export interface ChatLabelAssociationActionBody {
    labelId: string;
}
/** body for add/remove message label association action */
export interface MessageLabelAssociationActionBody {
    labelId: string;
    messageId: string;
}
