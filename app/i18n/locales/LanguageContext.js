"use client";
import { createContext } from 'react';

const LanguageContext = createContext();


export const LanguageProvider = ({ lng, children }) => {
    return (
        <LanguageContext.Provider value={lng}>
            {children}
        </LanguageContext.Provider>
    );
};
