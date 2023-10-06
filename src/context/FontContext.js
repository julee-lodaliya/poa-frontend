import React, { createContext, useContext, useState } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [setFont, setSetFont] = useState('');

  return (
    <FontContext.Provider value={{ setFont, setSetFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  return useContext(FontContext);
};
