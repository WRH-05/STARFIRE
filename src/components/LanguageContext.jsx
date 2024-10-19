
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); 

    const toggleLanguage = () => {
        setLanguage((prevLang) => {
            if (prevLang === 'en') return 'fr';
            if (prevLang === 'fr') return 'ar';
            return 'en'; // Return  English from Arabic
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
