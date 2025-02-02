import { currentConversationIdAtom } from "../utils/conversationsAtoms";
import { useAtom } from "jotai";
import { memo } from "react";

export const ButtonSelectConversation = memo(({ id, date, firstMessage }: { 
    id: string, 
    date: Date, 
    firstMessage: string 
}) => {
    const [currentConversationId, setCurrentConversationId] = useAtom(currentConversationIdAtom);
    
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
        <a className={`buttonSelectConversation ${currentConversationId === id ? 'buttonSelectConversation--active' : ''}`} role="button" onClick={handleClick}>
            <span className="buttonSelectConversation__date">{showDateConversation(date)}</span>
            <span className="buttonSelectConversation__message">{firstMessage}</span>
        </a>
    );
});