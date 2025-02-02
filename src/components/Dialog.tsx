import { useAtomValue } from "jotai";
import { conversationsAtom, currentConversationIdAtom } from "../utils/conversationsAtoms";
import { useEffect, useRef } from "react";

export const Dialog = () => {
    const currentConversationId = useAtomValue(currentConversationIdAtom);
    const conversations = useAtomValue(conversationsAtom);
    const currentConversation = conversations.find((conversation) => conversation.id === currentConversationId);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Attendre que le DOM soit mis à jour
        const timeoutId = setTimeout(() => {
            if (wrapperRef.current) {
                const element = wrapperRef.current;
                element.scrollTop = element.scrollHeight;
            }
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [conversations, currentConversation]);

    return (
        <div className="dialog" ref={wrapperRef}>
            <div className="dialog__message dialog__message--ia">
                <p>Comment puis-je t'aider ? Une commande "help" me permettra de te donner des informations sur mes capacités.</p>
            </div>
            {currentConversation?.messages.map((message) => (
                <div className={`dialog__message dialog__message--${message.role}`} key={message.id}>
                    {message.role === 'ia' ? (
                        <p dangerouslySetInnerHTML={{ __html: message.content }} />
                    ) : (
                        <p>{message.content}</p>
                    )}
                </div>
            ))}
        </div>
    );
}