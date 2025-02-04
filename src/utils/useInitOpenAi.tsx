import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { apiKeyOpenAiAtom } from "./apiKeyOpenAiAtom";
import OpenAI from "openai";

export const useOpenAI = () => {
    const apiKey = useAtomValue(apiKeyOpenAiAtom);
    
    const openai = useMemo(() => {
        if (!apiKey) return null;
        return new OpenAI({
            apiKey,
            dangerouslyAllowBrowser: true
        });
    }, [apiKey]);

    return openai;
};