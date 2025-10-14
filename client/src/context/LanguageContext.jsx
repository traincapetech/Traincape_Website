import React, { createContext, useContext, useState } from "react";

// Create a context for language
const LanguageContext = createContext();

// LanguageProvider component that will provide the language context to its children
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is "en" (English)

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  // If context is undefined, it means the provider is not wrapping the component
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
