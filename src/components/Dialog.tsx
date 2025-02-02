import { useAtomValue } from "jotai";
import { conversationsAtom, currentConversationIdAtom } from "../utils/conversationsAtoms";

export const Dialog = () => {
    const currentConversationId = useAtomValue(currentConversationIdAtom);
    const conversations = useAtomValue(conversationsAtom);
    const currentConversation = conversations.find((conversation) => conversation.id === currentConversationId);

    return <div>
        {currentConversation?.messages.map((message) => (
            <div key={message.id} style={{ display: 'flex', flexDirection: message.role === 'ia' ? 'row' : 'row-reverse' }}>
                <div 
                    style={{ 
                        backgroundColor: message.role === 'user' ? 'blue' : 'red', 
                        padding: '10px', 
                        borderRadius: '5px' 
                    }}
                >
                    {message.role === 'ia' ? (
                        <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: message.content }} />
                    ) : (
                        <p style={{ margin: 0 }}>{message.content}</p>
                    )}
                </div>
            </div>
        ))}
    </div>
}