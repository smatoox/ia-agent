import { useAtom } from "jotai";
import { useCallback, useState } from "react";
import { conversationsAtom, currentConversationIdAtom, IConversation, IMessage } from "./conversationsAtoms";
import { getAIResponse } from './fakeBrain';

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

        // Obtention de la réponse IA depuis fakeBrain
        const aiResponse = getAIResponse(message);

        // Création de la réponse IA
        const aiMessage: IMessage = {
            id: crypto.randomUUID(),
            date: new Date(),
            content: aiResponse,
            role: 'ia'
        };

        // Ajout de la réponse à la conversation
        setConversations(prevConversations => 
            prevConversations.map(conv => 
                conv.id === conversationId
                    ? { ...conv, messages: [...conv.messages, aiMessage] }
                    : conv
            )
        );

        setLoading(false);
    }, [currentConversationId, conversations]);

    return {
        handleMessage,
        loading
    };
};
