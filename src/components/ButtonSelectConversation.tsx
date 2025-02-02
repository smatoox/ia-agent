import { currentConversationIdAtom } from "../utils/conversationsAtoms";
import { useSetAtom } from "jotai";

export const ButtonSelectConversation = ({ id, date, firstMessage }: { id: string, date: Date, firstMessage: string }) => {
    const setCurrentConversationId = useSetAtom(currentConversationIdAtom);
    
    const handleClick = () => {
        setCurrentConversationId(id);
    };

    const showDateConversation = (conversationDate: Date) => {
        const dateObj = new Date(conversationDate);
        const isToday = dateObj.toDateString() === new Date().toDateString();
        
        return isToday 
            ? new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(dateObj)
            : new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(dateObj);
    }

    return (
        <button onClick={handleClick}>
            <span>{showDateConversation(date)}</span>
            <span>{firstMessage}</span>
        </button>
    );
}