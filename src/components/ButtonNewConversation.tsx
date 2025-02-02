import { useSetAtom } from "jotai";
import { currentConversationIdAtom } from "../utils/conversationsAtoms";

export const ButtonNewConversation = () => {
    const setCurrentConversationId = useSetAtom(currentConversationIdAtom);
    const handleNewConversation = () => {
        setCurrentConversationId(undefined);
    }
    return (
        <button onClick={handleNewConversation}>Nouvelle conversation</button>
    )
}