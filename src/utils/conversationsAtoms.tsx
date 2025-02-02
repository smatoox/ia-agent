import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface IConversation {
    id: string
    date: Date
    messages: IMessage[]
}

export interface IMessage {
    id: string
    date: Date
    content: string
    role: 'user' | 'ia'
}

export const currentConversationIdAtom = atom<IConversation['id'] | undefined>(undefined);

export const conversationsAtom = atomWithStorage<IConversation[]>('conversations', []);