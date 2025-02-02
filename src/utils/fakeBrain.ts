interface TimeZoneCity {
    name: string;
    offset: number;  // Offset en heures par rapport à UTC
    keywords: string[];
}

const majorCities: TimeZoneCity[] = [
    { name: "Paris", offset: 1, keywords: ["france", "paris", "française", "métropole"] },
    { name: "Londres", offset: 0, keywords: ["angleterre", "londres", "royaume-uni", "uk", "grande-bretagne"] },
    { name: "New York", offset: -5, keywords: ["new york", "états-unis", "usa", "amérique", "manhattan"] },
    { name: "Tokyo", offset: 9, keywords: ["japon", "tokyo", "japonais"] },
    { name: "Sydney", offset: 10, keywords: ["australie", "sydney", "australien"] },
    { name: "Dubai", offset: 4, keywords: ["dubai", "émirats", "emirats", "uae"] },
    { name: "Moscou", offset: 3, keywords: ["russie", "moscou", "russe"] },
    { name: "Pékin", offset: 8, keywords: ["chine", "pékin", "beijing", "chinois"] },
];

const timeRelatedWords = [
    "heure",
    "temps",
    "horloge",
    "maintenant",
    "actuellement"
];

const locationPrepositions = [
    "à",
    "a",
    "en",
    "au",
    "aux",
    "dans"
];

const weatherRelatedWords = [
    "météo",
    "meteo",
    "temps",
    "température",
    "temperature",
    "climat",
    "pleut",
    "pluie",
    "soleil"
];

const positiveWords = [
    "super",
    "génial",
    "cool",
    "merci",
    "bravo",
    "excellent",
    "parfait",
    "bien",
    "top",
    "sympa",
    "content",
    "heureux",
    "formidable",
    "extraordinaire",
    "fantastique"
];

const positiveResponses = [
    "Ravi que ça vous plaise ! 😊",
    "C'est un plaisir de vous aider !",
    "Votre enthousiasme me fait plaisir !",
    "Super, on continue comme ça ?",
    "Merci, c'est gentil ! Je fais de mon mieux.",
    "Ça me fait plaisir de voir que vous êtes content(e) !",
    "Ensemble, on forme une super équipe ! 🌟",
    "C'est vraiment agréable d'échanger avec vous !"
];

const commonExpressions = [
    "en forme",
    "d'accord",
    "ok",
    "content",
    "heureux",
    "fatigué",
    "prêt",
    "là",
    "disponible",
    "occupé",
    "désolé"
];

const getTimeInCity = (city: TimeZoneCity): string => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const cityTime = new Date(utc + (3600000 * city.offset));
    return `${cityTime.getHours()}:${String(cityTime.getMinutes()).padStart(2, '0')}`;
};

const nameQuestions = [
    "comment tu t'appelles",
    "quel est ton nom",
    "c'est quoi ton nom",
    "tu t'appelles comment",
    "dis-moi ton nom",
    "qui es-tu",
    "tu es qui",
    "présente-toi"
];

const getWeatherUrl = (city: TimeZoneCity): string => {
    const cityName = encodeURIComponent(city.name);
    const url = `https://openweathermap.org/find?q=${cityName}`;
    return `<a href="${url}" target="_blank">sur ce lien</a>`;
};

const rickRollIframe = `<div style="display: flex; justify-content: center;"><iframe width="460" height="215" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=CmIjLRU1Oy92RC1a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;

const rickRollPhrases = [
    "Au fait, j'ai quelque chose d'intéressant à te montrer :",
    "Tiens, regarde ça, c'est super cool :",
    "Ça me fait penser à une vidéo sympa :",
    "Hey, tu devrais voir ça :",
    "J'ai trouvé quelque chose qui pourrait t'intéresser :"
];

const shouldAddRickRoll = (): boolean => {
    return Math.random() < 0.25; // 25% de chance
};

const appendRickRoll = (response: string): string => {
    if (shouldAddRickRoll()) {
        const randomPhrase = rickRollPhrases[Math.floor(Math.random() * rickRollPhrases.length)];
        return `${response}\n\n${randomPhrase}\n${rickRollIframe}`;
    }
    return response;
};

const nameIntroductions = [
    "je m'appelle",
    "je me prénomme",
    "mon nom est",
    "mon prénom est",
    "je suis",  // On garde "je suis" mais avec les vérifications existantes
];

const greetings = [
    "bonjour",
    "bonsoir",
    "salut",
    "hello",
    "coucou",
    "hey",
    "hi",
    "yo"
];

const getGreetingResponse = (): string => {
    const hour = new Date().getHours();
    
    if (hour >= 18 || hour < 5) {
        return "Bonsoir ! Comment puis-je vous aider ?";
    } else if (hour < 12) {
        return "Bonjour ! Bien matinal ! Que puis-je faire pour vous ?";
    } else {
        return "Bonjour ! Comment puis-je vous aider ?";
    }
};

const defaultSuggestions = [
    "Faisons connaissance !",
    "Je peux vous donner l'heure dans différentes villes du monde. Une ville vous intéresse ?",
    "Voulez-vous connaître la météo quelque part ?",
    "Je peux vous dire l'heure qu'il est, ça vous intéresse ?",
    "Si vous me dites votre nom, on pourra faire connaissance !",
    "Je peux vous montrer la météo de plusieurs villes, vous voulez essayer ?",
    "Au fait, connaissez-vous le Rick Roll ?",
];

const helpKeywords = [
    "que peux-tu faire",
    "help",
    "aide",
    "menu",
    "options",
    "commandes",
    "fonctionnalités",
    "capabilities",
    "quelles sont tes fonctions",
    "tu fais quoi",
    "à quoi sers-tu",
    "que sais-tu faire",
    "montre-moi ce que tu sais faire",
    "quels sont tes talents",
    "de quoi es-tu capable",
    "comment peux-tu m'aider",
    "que proposes-tu",
    "quels services proposes-tu",
    "explique-moi ce que tu fais",
    "présente tes fonctions",
    "tes capacités",
    "guide",
    "manuel",
    "mode d'emploi",
    "comment ça marche",
    "comment t'utiliser",
    "que puis-je te demander",
    "qu'est-ce que tu peux faire",
    "montre-moi tes options",
    "besoin d'aide"
];

const getAllSuggestions = (): string => {
    return `Je peux faire plusieurs choses :
    <ul>
        <li>Vous donner l'heure dans différentes villes du monde</li>
        <li>Vous montrer la météo de plusieurs villes</li>
        <li>Faire connaissance et retenir votre nom</li>
        <li>Discuter de manière polie (bonjour, au revoir, etc.)</li>
        <li>Et peut-être même vous surprendre avec une vidéo intéressante 😉</li>
    </ul>
    N'hésitez pas à essayer !`;
};

const isCityOnly = (message: string): TimeZoneCity | null => {
    const words = message.split(/\s+/);
    // Si le message fait plus de 2 mots, ce n'est probablement pas juste une ville
    if (words.length > 2) return null;
    
    return majorCities.find(city => 
        city.keywords.some(keyword => 
            message === keyword || 
            message.includes(keyword) && words.length <= 2
        )
    ) || null;
};

export const getAIResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase().trim();
    let response = "";
    
    // Détection des salutations - à placer en premier
    if (greetings.some(greeting => lowerMessage.includes(greeting))) {
        response = getGreetingResponse();
        return appendRickRoll(response);
    }

    // Détection de réponse concernant le Rick Roll
    if (lowerMessage.includes("rick") || lowerMessage.includes("roll")) {
        return `Ah ! Vous allez adorer ça ! 😈\n${rickRollIframe}`;
    }

    // Détection des questions sur le nom de l'IA
    if (nameQuestions.some(question => lowerMessage.includes(question))) {
        response = "Je m'appelle Bot. Et vous, comment vous appelez-vous ?";
        return appendRickRoll(response);
    }
    
    // Détection quand l'utilisateur donne son nom - version plus stricte
    if (nameIntroductions.some(intro => lowerMessage.startsWith(intro)) || 
        (lowerMessage.includes("je suis") && !commonExpressions.some(expr => lowerMessage.includes(expr)))
    ) {
        const words = lowerMessage.split(/\s+/);
        
        // Recherche du nom après les expressions d'introduction
        const nameIndex = words.findIndex(w => 
            w === "m'appelle" || 
            w === "prénomme" ||
            (w === "suis" && !commonExpressions.some(expr => lowerMessage.includes(expr))) || 
            ((w === "nom" || w === "prénom") && words[words.indexOf(w) + 1] === "est")
        );
        
        if (nameIndex !== -1 && words[nameIndex + 1] && !positiveWords.includes(words[nameIndex + 1])) {
            // Vérifie que ce qui suit n'est pas une expression commune
            const potentialName = words.slice(nameIndex + 1).join(" ");
            if (!commonExpressions.some(expr => potentialName.includes(expr))) {
                const name = words[nameIndex + 1];
                return appendRickRoll(`Enchanté ${name} ! Comment puis-je vous aider ?`);
            }
        }
    }

    // Vérification si le message est juste une ville
    const cityOnly = isCityOnly(lowerMessage);
    if (cityOnly) {
        const time = getTimeInCity(cityOnly);
        const weatherUrl = getWeatherUrl(cityOnly);
        return `Pour ${cityOnly.name} l'heure est ${time} et la météo est disponible sur ${weatherUrl}`;
    }

    // Si le message contient des mots positifs
    if (positiveWords.some(word => lowerMessage.includes(word))) {
        const randomIndex = Math.floor(Math.random() * positiveResponses.length);
        return positiveResponses[randomIndex];
    }

    // Si la question concerne l'heure
    if (timeRelatedWords.some(word => lowerMessage.includes(word))) {
        // Analyse plus précise pour trouver la ville/pays
        const words = lowerMessage.split(/\s+/);
        let targetLocation = null;

        // Cherche une séquence "préposition + lieu"
        for (let i = 0; i < words.length - 1; i++) {
            if (locationPrepositions.includes(words[i])) {
                const locationPhrase = words.slice(i + 1, i + 3).join(" ");
                targetLocation = majorCities.find(city => 
                    city.keywords.some(keyword => 
                        locationPhrase.includes(keyword) || 
                        keyword.includes(locationPhrase)
                    )
                );
                if (targetLocation) break;
            }
        }

        // Si pas trouvé avec les prépositions, cherche directement les mots-clés
        if (!targetLocation) {
            targetLocation = majorCities.find(city => 
                city.keywords.some(keyword => lowerMessage.includes(keyword))
            );
        }

        if (targetLocation) {
            return `Il est ${getTimeInCity(targetLocation)} à ${targetLocation.name}`;
        }

        // Si on détecte une question sur l'heure mais sans lieu précis
        if (words.some(w => locationPrepositions.includes(w))) {
            // Si une préposition de lieu est présente mais pas de ville reconnue
            return "Je n'ai pas reconnu la ville ou le pays. Pouvez-vous me préciser la ville ou le pays dont vous souhaitez connaître l'heure ?";
        }

        // Si c'est une question d'heure générale
        const now = new Date();
        const localTime = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
        return `Il est ${localTime}. Si cela ne correspond pas à votre fuseau horaire, précisez le pays ou la capitale.`;
    } 
    
    // Si la question concerne la météo
    if (weatherRelatedWords.some(word => lowerMessage.includes(word))) {
        const words = lowerMessage.split(/\s+/);
        let targetLocation = null;

        // Réutilisation de la même logique de détection de ville que pour l'heure
        for (let i = 0; i < words.length - 1; i++) {
            if (locationPrepositions.includes(words[i])) {
                const locationPhrase = words.slice(i + 1, i + 3).join(" ");
                targetLocation = majorCities.find(city => 
                    city.keywords.some(keyword => 
                        locationPhrase.includes(keyword) || 
                        keyword.includes(locationPhrase)
                    )
                );
                if (targetLocation) break;
            }
        }

        if (!targetLocation) {
            targetLocation = majorCities.find(city => 
                city.keywords.some(keyword => lowerMessage.includes(keyword))
            );
        }

        if (targetLocation) {
            const weatherUrl = getWeatherUrl(targetLocation);
            return `Voici la météo pour ${targetLocation.name} : ${weatherUrl}`;
        }

        return "Pour quelle ville souhaitez-vous connaître la météo ?";
    }
    
    // Détection des demandes d'aide - à placer après les salutations
    if (helpKeywords.some(keyword => lowerMessage.includes(keyword))) {
        response = getAllSuggestions();
        return appendRickRoll(response);
    }
    
    // Réponse par défaut avec suggestion aléatoire
    const randomSuggestion = defaultSuggestions[Math.floor(Math.random() * defaultSuggestions.length)];
    response = `Je ne suis pas sûr de comprendre... ${randomSuggestion}`;
    return appendRickRoll(response);
};
