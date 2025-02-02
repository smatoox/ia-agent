import { useAtom } from "jotai";
import { useCallback, useState } from "react";
import { conversationsAtom, currentConversationIdAtom, IConversation, IMessage } from "./conversationsAtoms";

export const useConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useAtom(conversationsAtom);
    const [currentConversationId, setCurrentConversationId] = useAtom(currentConversationIdAtom);

    const handleMessage = useCallback(async (message: string) => {
        setLoading(true);

        let conversationId = currentConversationId;

        // Si pas de conversation active, nouvelle conversation
        if (!currentConversationId) {
            conversationId = crypto.randomUUID();
            const newConversation: IConversation = {
                id: conversationId,
                date: new Date(),
                messages: []
            };
            setConversations(prevConversations => [...prevConversations, newConversation]);
            setCurrentConversationId(conversationId);
        }

        // Création du message utilisateur
        const newUserMessage: IMessage = {
            id: crypto.randomUUID(),
            date: new Date(),
            content: message,
            role: 'user'
        };

        // Ajout du message à la conversation
        setConversations(prevConversations => 
            prevConversations.map(conv => 
                conv.id === conversationId
                    ? { ...conv, messages: [...conv.messages, newUserMessage] }
                    : conv
            )
        );

        // todo Simulation de la réponse IA

        setLoading(false);
    }, [currentConversationId, conversations]);

    return {
        handleMessage,
        loading
    };
};
