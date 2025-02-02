import { FormEvent, useCallback, useRef } from 'react';
import { useConversations } from '../utils/useConversation';

export const ChatBar = () => {   
    const inputRef = useRef<HTMLInputElement>(null);
    const { handleMessage, loading } = useConversations();

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();

        const text = inputRef.current?.value.trim();
        if (!text) return;

        handleMessage(text);

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }, [handleMessage]);

    return (
        <form className="chat-bar" onSubmit={handleSubmit}>
            <input 
                ref={inputRef} 
                type="text" 
                placeholder="Message à animer après" 
                maxLength={100}
                disabled={loading}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Envoi...' : 'Envoyer'}
            </button>
        </form>
    );
};