import React, { createContext, useState } from "react";

export const TextCustomizerContext = createContext();

export const TextCustomizerProvider = ({ children }) => {
    // default values
    const [fontSize, setFontSize] = useState('16px'); 
    const [fontColor, setFontColor] = useState('#000000');

    const value = {
        fontSize, setFontSize, fontColor, setFontColor
    };

    return (
        <TextCustomizerContext.Provider value={value}>
            {children}
        </TextCustomizerContext.Provider>
    );
};