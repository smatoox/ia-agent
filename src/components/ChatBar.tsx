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
        <form className="chatBar" onSubmit={handleSubmit}>
            <input 
                className="chatBar__input chatBar__input--loading"
                ref={inputRef} 
                type="text" 
                placeholder="Demande moi ce que je peux faire pour toi" 
                maxLength={100}
                disabled={loading}
            />
            <span className="chatBar__buttonContainer">
                <button className="chatBar__button" type="submit" disabled={loading}>
                    <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                        <path d="M12 21L12 3M12 3L20.5 11.5M12 3L3.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                {loading && <div className="chatBar__loader"></div>}
            </span>
        </form>
    );
};