const API_KEY = process.env.GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

// A simple in-memory cache to store translations
const cache = new Map<string, string>();

export const translateText = async (text: string, sourceLang: string, targetLang: string): Promise<string> => {
  const cacheKey = `${text}-${targetLang}`;
  
  // Return cached translation if available
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!;
  }

  // Map language codes to full names for a clearer prompt
  const langMap: { [key: string]: string } = {
    'de': 'German',
    'en': 'English',
    'es': 'Spanish',
    'nl': 'Dutch'
  };

  const sourceLangName = langMap[sourceLang] || sourceLang;
  const targetLangName = langMap[targetLang] || targetLang;

  const prompt = `Translate the following ${sourceLangName} text to ${targetLangName}. Do not add any extra comments or context, just provide the raw translation.\n\n"${text}"`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt,
          }],
        }],
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      const translated = data.candidates[0].content.parts[0].text.trim();
      // Cache the successful translation
      cache.set(cacheKey, translated);
      return translated;
    } else {
      console.error("Unexpected API response structure:", data);
      return "Translation not available.";
    }

  } catch (error) {
    console.error('Translation error:', error);
    return 'Translation failed.';
  }
};
