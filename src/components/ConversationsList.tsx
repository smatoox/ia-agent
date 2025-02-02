import { useAtomValue } from "jotai";
import { conversationsAtom } from "../utils/conversationsAtoms";
import { ButtonSelectConversation } from "./ButtonSelectConversation";

export const ConversationList = () => {
    const conversations = useAtomValue(conversationsAtom);

    return (
        <ul className="conversationsList">
            {conversations.map((conversation) => (
                <li key={conversation.id}>
                    <ButtonSelectConversation 
                        key={conversation.id}
                        id={conversation.id}
                        date={conversation.date}
                        firstMessage={conversation.messages[0]?.content || ''}
                    />
                </li>
            ))}
        </ul>
    );
}